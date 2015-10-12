Where's the agile deliverable?

Colors and contrasts look good. Nice work.

Re HTML, the problem with having done "heaps of HTML" in the past is that you are almost certainly the victim of bad advice and bad habits. We want to teach you good habits. So please try to complete the HTML assignments and give them some serious thought.

Much of what we want to impress on you is proper style. For example, you have this in your HTML:

```html
  <section>
    <img src="img/imageMe.png" alt="Photograph of Mathew MacDonald" class="profile-photo">
    <h3>About Me</h3>
    <p>Hi, I'm Mathew MacDonald.</p>
<p>I am a student of <a href="http://devacademy.co.nz/">Enspiral Dev Acadamy</a>. I already have a diploma in software development specializing in Java but I am working to expand my coding knowledge.</p>
<h3>About this Website</h3>
    <p>This website is the result of my work with Team Treehouse. You can see the work I have done at <a href="http://teamtreehouse.com/mathewmacdonald">teamtreehouse.com/mathewmacdonald</a> and get an idea of some of the things I have learnt so far.</p>
  </section>
```

What happened there? Indentation a mess. Also, if an element contains content more than 80 characters long, push that content to the next line(s) and indent it. Thus:

```html
<section>
  <img src="img/imageMe.png" alt="Photograph of Mathew MacDonald"
    class="profile-photo">

  <h3>About Me</h3>

  <p>Hi, I'm Mathew MacDonald.</p>

  <p>
    I am a student of <a href="http://devacademy.co.nz/">Enspiral Dev Acadamy</a>.
    I already have a diploma in software development specializing in Java but I
    am working to expand my coding knowledge.
  </p>

  <h3>About this Website</h3>

  <p>
    This website is the result of my work with Team Treehouse. You can see the
    work I have done at <a href="http://teamtreehouse.com/mathewmacdonald">
    teamtreehouse.com/mathewmacdonald</a> and get an idea of some of the things
    I have learnt so far.
  </p>
</section>
```

A bit cleaner. One big problem with this page is the use of the `<h3>` element. Why h3? Where is the h1 and the h2? The `<h3>` element does NOT represent a font size, it represents the *third level* in a hierarchy of subsections. You can't have a third level without a first and second level. So these should be `<h1>` elements.

But it's more than that. You're using them for a *styling* effect. That's the proper job of CSS, so this is a violation of separation of concerns: you're using a semantic element incorrectly in order to get a styling effect. Don't do it.

More thought could be put into this. As these are parallel sections, why not use a section for each? And if you give the section a `<header>` element, you'll add some useful semantic information:

```html
<section>
  <img src="img/imageMe.png" alt="Photograph of Mathew MacDonald"
    class="profile-photo">

  <h1>About Me</h1>

  <p>Hi, I'm Mathew MacDonald.</p>

  <p>
    I am a student of <a href="http://devacademy.co.nz/">Enspiral Dev Acadamy</a>.
    I already have a diploma in software development specializing in Java but I
    am working to expand my coding knowledge.
  </p>
</section>

<section>
  <h1>About this Website</h1>

  <p>
    This website is the result of my work with Team Treehouse. You can see the
    work I have done at <a href="http://teamtreehouse.com/mathewmacdonald">
    teamtreehouse.com/mathewmacdonald</a> and get an idea of some of the things
    I have learnt so far.
  </p>
</section>
```

Now use CSS to style the `<h1>` headings.

Also, you use `id` attributes in your CSS. Not a good idea, generally, because of specificity, which we'll discuss soon. But there are [other good reasons, too](http://oli.jp/2011/ids/). In general, use classes for CSS, ids for JavaScript.

There's more, I'm sure, but that's enough for today. :-) Do try to do the HTML stuff. It will get more complex, I promise.

On the JavaScript, you've got an interesting approach. While this works (except that the last function does not comply with the work requirements, which were that it was to return 0 or 1), it's pretty verbose, don't you think?

One of the things we strive to do as programmers is to a) make our code more readable, and b) reduce lines of code provided that we don't break rule a).

Here's your code:

```js
function avg (arg1, arg2){
  var sum = arg1 + arg2
  var x = sum / 2
  return x
}

function avgOfThree (arg1, arg2, arg3){
  var sum = arg1 + arg2 + arg3
  var x = sum / 3
  return x
}

function isOdd (arg1){
  var x = arg1 % 2
  var returnvar = ""
  if (x == 1){
    returnvar = "Odd"
  } else if (x == 0) {
    returnvar = "Even"
  }else {
    returnvar = "Unexpected Error"
  }
  return returnvar
}
```

Note: we'll be following the [standard.js](http://standardjs.com/rules.html#javascript-standard-style) style guide, so the following changes are based on that.

The question I would have with your `avg` function is what benefit is gained by adding two lines of code and taking extra memory to save variables that will only need to be garbage collected a moment later. Generally, this sort of variable use is beneficial when the equation is complicated or when we want to add some semantic information about what kinds of values we're working with.

In this case, however, the name of the function speaks for itself. So isn't this easier to read:

```js
function avg (x, y) {
  return (x + y) / 2
}
```

There's no real benefit to naming arguments `arg` -- we know they're arguments. Why not use the old x and y from math? And the formula for calculating the average is pretty widely known, so the `(x + y) / 2` is as easy to read as English. And we don't take up memory assigning variables for no reason.

Similarly, isn't this clearer?

```js
function avgOfThree (x, y, z){
  return (x + y + z) / 3
}
```

For the final function, doesn't `x % 2` return 0 if x is even and 1 if x is odd, which is what we wanted out of the function? So we could just do:

```js
function isOdd (n) {
  return n % 2
}
```

Truth be told, though, you're right that we probably wouldn't return 0 or 1. Why bother when we could just do the modulus? I guess that `isOdd` adds some semantic information, but really if we have a function name that starts with `is` we probably expect it to return a boolean.

We can do that with the `===` comparison operator:

```js
function isOdd (n) {
  return n % 2 === 1
}
```

You might also see people use the `!` not operator to convert "truthy" to `true`. As you probably know (I can see that you've done some programming before), JavaScript considers 0 to be falsy and 1 to be truthy. So we can use `!` to convert truthy to `false`. Add another and we've converted "truthy" to `true`:

```js
function isOdd (n) {
  return !!(n % 2)
}
```

But this is a lot less readable. If the new JavaScript 2015 turns you on, you could use an anonymout fat arrow function and a constant:

```js
const isOdd = (n) => n % 2 === 1
```

With syntax highlighting, that's pretty readable.

Note that we put a space before the `(` in a function *definition*, but not in a function *call*.

OK, that's a start. Good work!

Good responses on user-centered design and usability. Keep it up!
