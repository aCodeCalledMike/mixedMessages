<<<<<<< HEAD
  //98 random adjective this is primarily for testing and may or may not be used in the final content .
masterRandomArr = ['brown', 'bored', 'testy', 'squealing', 'historical', 'befitting', 'busy', 'creepy',
 'adamant', 'green', 'incompetent', 'elastic', 'healthy', 'simple', 'jazzy',
  'flowery', 'deadpan', 'precious', 'mighty', 'loving',
'efficient', 'fresh', 'spooky', 'sparkling', 'quaint',
 'pleasant', 'gamy','cynical', 'godly', 'puzzled', 'mammoth', 'detailed', 'ignorant', 'chubby',
'polite', 'sad', 'penitent', 'filthy', 'sturdy', 'hard', 'sleepy', 'woozy',
 'nice', 'happy', 'enchanted', 'misty', 'nine', 'chilly', 'illustrious', 'fearful', 'obedient', 'physical',
 'grubby', 'overwrought', 'hushed', 'humdrum', 'upbeat', 'panicky', 'longterm',
'plant', 'alive', 'sneaky', 'conscious', 'scandalous',  'organic', 'breezy',
'forgetful', 'defiant', 'smart', 'hallowed', 'lamentable', 'cuddly',
'crowded', 'picayune', 'hulking', 'whole', 'goofy', 'ruthless',
'last', 'windy', 'brash', 'safe', 'woebegone', 'anxious',
'gentle', 'witty', 'brainy', 'rough',' wandering', 'faded',
'charming', 'ossified', 'inexpensive', 'decorous', 'ablaze','wet', 'nippy', 'full'];



//function to select one random name from overall array.
const returnRandName = () => {
    const randName = masterRandomArr
    return randName[Math.floor(Math.random() * 98)] 
  }
/* function that returns fixed number(20) of random chosen names.
 incase the need to create narrowed down arrays*/
  const randNumNames = () => {
    const newRandArr = []
    for (let i = 0; i < 20; i++) {
      newRandArr.push(returnRandName())
    }
    return newRandArr
  }
/* factory function to create names as objects, the strings from 'secondName' and 'birthMonth'
are taken from variables that store an array of a single sring e.g let secondName = ['MySecondName'] */
  const funnyNameFactory = (secondName,birthMonth) => {
    return {
      
    lastName: secondName,
    monthOfBirth: birthMonth,
// randomize method that can be called on the funnnyNameFactory obj this will change the name and return a log.
    randomize(){
  //Names is a new instance of 20 random names.
    const Names = randNumNames() ;
    //straight swap lastname for one random out of 98. 'funName2' (fun second name)
    let funName2 = returnRandName();
    //straight swap for birth month name. 'fun
    let funMonthName = returnRandName();
    //incase the selections are the same newMonthName should return a new random array that does not include funName2.
    const newMonthName = Names.filter(word => word !== funName2);
    //funMonthName2 is one randomly selected word from the newMonthName array
    let funMonthName2 = newMonthName[Math.floor(Math.random()*19)]
    /*i want to preserve the orginal inputs from "secondName = ['MySecondName']"
    and made the swap to a clone of the array, to help see if the functions are working. */
     let secName = secondName.slice();
     let mnthName = birthMonth.slice();

   //console.log(funName2)
   //console.log(funMonthName)
   //console.log(funMonthName2)

   secName = funName2;
   mnthName = funMonthName;
//incase the second name and month are the same selection this will swap funMonthName to funMonthName2.
   for (let i=0 ; i < mnthName.length ; i++)
   {
     if (mnthName[i] === secName){mnthName[i] = funMonthName2}
   }
   Name1.lastName = 
   Name1.monthOfBirth = mnthName
   console.log(`hello ${secondName}, born in ${birthMonth}. Your new name is ${secName} ${mnthName}` )
  },
    }
  }

let secondName = ['Hobbes']
let birthMonth = ['june']

let Name1 = funnyNameFactory(secondName,birthMonth);
//console.log(Name1)


Name1.randomize();
//console.log(Name1)






/*returnRandName();
randNumNames();
console.log(returnRandName());
console.log(randNumNames());
  */

 
=======

>>>>>>> 6878642b55bfe4a1a2aff78ce23bddcbb9738e3e
