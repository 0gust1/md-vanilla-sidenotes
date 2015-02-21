/**
 * Generate sidenotes using footnotes from Multimarkdown generated content
 * Idea and principle borrowed from Adrew Clark : http://acdlite.github.io/jquery.sidenotes/ and https://github.com/acdlite/jquery.sidenotes
 *
 * This script : - gather footnotes in the passed container selector
 *               - insert the sidenotes in the current text, according to screen size :
 *                  - on big screens insert the sidenote *before* the anchor
 *                  - on medium screens, insert the sidenote *after* the anchor



/**
* Gather footnotes and build an array of "sidenotes" ready to be inserted in DOM ?
* Not used ATM
* @param  {String} selector for the container to processfootnotes
*/
var processFootNotesToSideNotes = function processFootNotesToSideNotes(rootSel){

    var footNotes = document.querySelectorAll(rootSel+' .footnotes ol li'),
    sidenotes     = [],
    i             = 1; //Note numbering

    //Each footnote
    Array.prototype.forEach.call(footNotes,function(note){
        //console.log('test');
        //var docFragment = document.createDocumentFragment();

        var noteNode = document.createElement('aside');
        var id = note.id.replace('fn:','');
        noteNode.classList.add('footnote');
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

/**
 *Render sidenotes for large screens : "Sidenotes"
 */
var renderSideNotesLarge = function renderSideNotesLarge(sidenotes){
    //place sidenotes into the DOM, just before the anchor ref.
    //remove any previously rendered infocards and/or hide original footnotes
};

/**
 *Render sidenotes for medium screens : "InfoCards"
 */
var renderSideNotesMedium = function renderSideNotesMedium(sidenotes){
    //place sidenotes into the DOM, just after the anchor ref.
    //remove any previously rendered sidenotes and/or hide original footnotes
};

/**
 *Render sidenotes for medium screens : "classic footnotes"
 */
var renderSideNotesSmall = function renderSideNotesSmall(sidenotes){
    //basically, let the original footnotes appear again
    //hide/remove any previously inserted sidenotes or infocards
};




/**
 * Generate sidenotes using footnotes from Multimarkdown generated content
 * Idea and principle borrowed from Adrew Clark : http://acdlite.github.io/jquery.sidenotes/ and https://github.com/acdlite/jquery.sidenotes
 *
 * This script : - gather footnotes in the current container
 *               - insert the sidenotes in the current text, according to screen size :
 *                  - on big screens insert the sidenote *before* the anchor
 *                  - on medium screens, insert the sidenote *after* the anchor
 *
 * TODO : parametrize selector for footnotes
 *      : parametrize classes and tags generated
 *      : bind a resize event to replace sidenotes when screen size changes
 *
 * @param  {String} selector for the container to process
 */
var processFootNotes = function processFootNotes(rootSel){

    var footNotes  = document.querySelectorAll(rootSel+' .footnotes ol li');
    console.log(footNotes);

    var i = 1; //Note numbering

    //Each footnote
    Array.prototype.forEach.call(footNotes,function(note){
        //console.log('test');
        //var docFragment = document.createDocumentFragment();

        var noteNode = document.createElement('aside');
        var id = note.id.replace('fn:','');
        //noteNode.id = id;
        noteNode.classList.add('sidenote');
        noteNode.setAttribute('data-ref',i);

        //Append footnote childrens to the sidenote
        Array.prototype.forEach.call(note.childNodes,function(noteChild){
            noteNode.appendChild(noteChild.cloneNode(true));
        });

        console.log(noteNode.innerHTML);

        //append the sidenote along the pointing anchor

        var anchor = document.getElementById('fnref:'+id);

        //get the anchor parent element (a <p>)
        var anchorParent = anchor.parentElement.parentElement;

        /* big screens */
        //insert before : wide screen
        anchorParent.insertBefore(noteNode, anchor.parentElement);

        /* medium screens */
        //insert after : medium screen
        //anchorParent.insertBefore(noteNode, anchor.nextSibling);

        /* small screens */
        //no need for JS, just hide the sidenotes and show th footnotes via media queries

        i++;
    });

};

//module.exports = processFootNotes;


