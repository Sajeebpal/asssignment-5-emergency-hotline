# assignment-5
<h2>Answer one</h2>
<h5>getElementById</h5>
<p> we get one specific element by calling the ID through getElementById method</p>
<h5>getElementsByClassName</h5>
<p>we get HTML collection of elements which have same class name</p>
<h5>querySelector</h5>
<p>This method takes all possible CSS selectors and give us the first matched element </p>
<h5>querySelectorAll</h5>
<p>This method takes all possible CSS selectors and give us the Node List of matched elements </p>


<h2>Answer Two</h2>
<p> In order to create new element, we will use createElement method giving the tag name as its argument and store it in a new variable. then, we will set the innerText/ innerHTML. Lastly, we will append the new child element to the parent element</p>

<h2>Answer Three</h2>
<p>When an event occurs in a child element, the event also moves to the parents of that child in the DOM hierarchy. And this happenings is called event bubbling</p>

<h2>Answer Four</h2>
<p>Event delegation is a part of event Bubbling. As we know that, the events happened in child elements also move to their parents.<br>
Event bubbling can save memory space and make the code smoother. Rather than applying addEventListener to all child elements we can simply put one EventListener to their parent. and then get the target child element to access the childs. This is the concept of <b>Event Delegation </b></p>

<h2>Answer Five</h2>
<p><b>preventDefault()</b> method is used to stop the default actions of a browser and <b>stopPropagation()</b> methode is used to stop the event bubbling from child elements to parent elements </p>
