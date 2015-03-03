# md-vanilla-sidenotes

A front-end micro module to insert (markdown) footnotes as sidenotes, alongside the original content.

## Inspiration :

**Behavior :** inspired by <https://github.com/acdlite/jquery.sidenotes>, but with less functionnalities and without the jQuery dependency.

**UX :** <https://medium.com/de-correspondent/links-are-broken-these-three-alternatives-have-improved-our-readers-reading-experience-796c302c8930>

## What ?

Work in progress, see : https://gist.github.com/0gust1/260638bd34a434e7f3dd

ATM : the code is starting to work.

Call `initialize(options)`, where `options` is like :

```
    {
        rootSel:".wrapper",
        footNotesContainerSel:".footnotes",
        footNotesSel:"ol li",
        footNoteIdPattern:"",
        footNoteAnchorPattern:"",
        sideNoteClass:"sidenote",
        largeMediaQuery:"(min-width: 800px)",
        mediumMediaQuery:"(max-width: 800px)",
        smallMediaQuery:""
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


