/**
 * Generate sidenotes using footnotes from Multimarkdown generated content
 * Idea and principle borrowed from Adrew Clark : http://acdlite.github.io/jquery.sidenotes/ and https://github.com/acdlite/jquery.sidenotes
 *
 * This script : - gather footnotes in the passed container selector
 *               - insert the sidenotes in the current text, according to screen size :
 *                  - on big screens insert the sidenote *before* the anchor
 *                  - on medium screens, insert the sidenote *after* the anchor



/**
 * Gather footnotes and build an array of 'sidenotes' ready to be inserted in DOM ?
 * Not used ATM
 * @param  {String} selector for the container to processfootnotes
 */
var processFootNotesToSideNotes = function processFootNotesToSideNotes(opts){
    'use strict';
    var selector = opts.rootSel+' '+opts.footNotesContainerSel+' '+opts.footNotesSel;
    var footNotes = document.querySelectorAll(selector),
        sidenotes     = [],
        i             = 1; //Note numbering

    //Each footnote
    Array.prototype.forEach.call(footNotes,function(note){
        //var docFragment = document.createDocumentFragment();

        var noteNode = document.createElement('aside');
        var id = note.id.replace('fn:','');
        noteNode.classList.add('sidenote');
        noteNode.setAttribute('data-ref',i);

        //Append footnote childrens to the sidenote
        Array.prototype.forEach.call(note.childNodes,function(noteChild){
            noteNode.appendChild(noteChild.cloneNode(true));
        });

        var sidenote = {};
        sidenote.id= id;
        sidenote.node = noteNode;
        sidenote.num = i;
        sidenotes.push(sidenote);
        i++;
    });

    return sidenotes;
};


var initialize = function initialize(options){
    'use strict';
    var opts = options || {
        rootSel:'.wrapper',
        footNotesContainerSel:'.footnotes',
        footNotesSel:'ol li',
        footNoteIdPattern:'',
        footNoteAnchorPattern:'',
        sideNoteClass:'sidenote',
        largeMediaQuery:'(min-width: 800px)',
        mediumMediaQuery:'(max-width: 800px)',
        smallMediaQuery:''
    };

    var notes = processFootNotesToSideNotes(opts);
    console.dir(notes);
    //
    var mqlLarge = window.matchMedia(opts.largeMediaQuery);
    mqlLarge.addListener(function(mql){
        renderSideNotesL(mql,notes);
    });

    ////
    var mqlMedium = window.matchMedia(opts.mediumMediaQuery);
    mqlMedium.addListener(function(mql){
        renderSideNotesM(mql, notes);
    });

    function renderSideNotesL(mql, notes){
        if (mql.matches) {
            console.log('large !');
            renderSideNotesLarge(notes);
        }
    }

    function renderSideNotesM(mql, notes){
        if (mql.matches) {
            console.log('medium !');
            renderSideNotesMedium(notes);
        }
    }

    /**
     *Render sidenotes for large screens : 'Sidenotes'
     */
    var renderSideNotesLarge = function renderSideNotesLarge(sidenotes){
        //place sidenotes into the DOM, just before their anchor ref.
        //remove any previously rendered infocards and/or hide original footnotes
        sidenotes.forEach(function(note){
            var anchor = document.getElementById('fnref:'+note.id);
            //get the global container
            var container = anchor.parentElement.parentElement;
            /* big screens */
            //in the container, insert the note before the anchor parent
            container.insertBefore(note.node, anchor.parentElement);
        });
    };

    /**
     *Render sidenotes for medium screens : 'InfoCards'
     */
    var renderSideNotesMedium = function renderSideNotesMedium(sidenotes){
        //place sidenotes into the DOM, just after their anchor ref.
        //remove any previously rendered sidenotes and/or hide original footnotes
        sidenotes.forEach(function(note){
            var anchor = document.getElementById('fnref:'+note.id);
            //get the global container
            var container = anchor.parentElement.parentElement;
            /* medium screens */
            //in the container, insert the note before the next sibling of the anchor parent
            container.insertBefore(note.node, anchor.parentElement.nextSibling);
        });
    };

};

//module.exports = processFootNotes;

