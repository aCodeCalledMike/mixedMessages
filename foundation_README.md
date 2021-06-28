### This readme refers to Working_foundation.js.
## Working_foundation.js

this read me is an overview of working foundation so any coder new to the project
can understand mikes concept when working with this code, it was his first step 
in building the nickname generator and it aims to :

+ take two imputs : First Name & Birth Month.
+ swap those inputs with a random selection.
+ not allow the 2 new selection to be the same.
+ return a console log displaying the orignal imput and new random selections.

working_foundaion contains :

+ Master array of 98 random adjectives. 
+ Function to random word function. (from master array)
+ Function to return random array of 20 words. (from master array)
+ Factory Function that takes 2 peramiters (lastname,birth month) and returns an object with the properties. (lastname,birth month)
+ Method that clones the orginal properties and swaps them with a new random selection,
  this method cannot make the same selections for the new properties,
  this method returns a console log displaying the orignal input and new random selections.
+ variables that contain single string array for the 2 inputs.
+ variable that contains the new object (this object uses the inputs from the single string arrays)

# When running this code :
+ user can change the input from the single string arrays.
+ rename the variable that creates the new object.
+ call the randomize method on the new object to see the console log displaying the orignal imput and new random selections.

let secondName = ['Hobbes']     (input 1 is 'Hobbes')

let birthMonth = ['June']      (input 2 is 'June')

let Name1 = funnyNameFactory(secondName,birthMonth);     (Name1 is the object that can be used with randomize() )

Name1.randomize();  one example returns: "hello Hobbes, born in june. Your new name is historical adamant"

# Mike:
"I beleive this is a solid step in developing a name randomizer,
theres lots to build on - calling methods on objects seemed a great way for more customization in the future,
It would be great to discuss ideas for developing this further and completing the original objectives."
