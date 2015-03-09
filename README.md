# md-vanilla-sidenotes

## What ?

**A front-end micro module to manage (eventually markdown generated) footnotes as sidenotes. In a responsive way.**

You can see a quick demo here : <http://0gust1.github.io/md-vanilla-sidenotes/demo/>


### Inspiration :

**Behavior :** inspired by <https://github.com/acdlite/jquery.sidenotes>, but with less functionnalities and without the jQuery dependency.

**UX :** <https://medium.com/de-correspondent/links-are-broken-these-three-alternatives-have-improved-our-readers-reading-experience-796c302c8930>

Starting point, see : https://gist.github.com/0gust1/260638bd34a434e7f3dd

## How

Beware, work in progress :-)

Call `initialize(options)`, where `options` is like :

```javascript
    {
        rootSel:'.wrapper', //rootWrapper for your content
        footNotesContainerSel:'.footnotes', //base container for the footnotes to transform into sidenotes
        footNotesSel:'ol li', //selector for the footnotes
        footNoteIdPattern:'fn:', //existing footNotes ID prefix
        footNoteAnchorPattern:'fnref:', //ID prefix for the anchors in the main content, linking to notes.
        sideNoteClass:'sidenote', //optional : this class will be used for the generated sidenotes
        largeMediaQuery:'(min-width: 800px)', //Media query to trigger the behavior for ‘large’ screens
        mediumMediaQuery:'(max-width: 800px)', //Media query to trigger the behavior for ‘medium’ screens
        smallMediaQuery:'' //Media query to trigger the behavior for ‘small’ screens
    }

```

**Limitations :**

Won’t work on IE8 & IE9 : the code use the matchMedia API. You can enventually use a polyfill for that : <https://github.com/paulirish/matchMedia.js/>.

### TODO :

* Clean the original footnotes
* Make a better and cleaner code
* Finish the reflexion about packaging (bower versus npm ?)
* Implement some ideas below.

### Ideas :

* Hovering the sidenote could make the anchor / anchor container to stand out.
* Think about the possibility to extend sidenote behavior with functions and callbacks : for the davidbgk idea for example, or the previous one.


