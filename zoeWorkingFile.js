// Array of 98 random words
masterRandomArr = ['brown', 'bored', 'testy', 'squealing', 'historical', 'befitting', 'busy', 'creepy','adamant', 'green', 'incompetent', 'elastic', 'healthy', 'simple', 'jazzy','flowery', 'deadpan', 'precious', 'mighty', 'loving',
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

//placeholders for 3 random name outputs. To be replaced with actual results after running the function.
let newName1 = '';
let newName2 = '';
let newName3 = '';

//function to randomly return a string from a word array
const getRandName = (wordArray) => {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
};

//function to return 3 random names, taking in no inputs
const create3NewNames = () => {
    // create a new array to avoid making changes to the master array
    let mainArray = masterRandomArr;

    // return 1st random name by randomlyassigning a string from the main array
    newName1 = getRandName(mainArray);

    //remove newName1 from the main array to avoid duplicate in newName2 and newName3
    mainArray = mainArray.filter(word => word !== newName1);

    // return 2nd random name by randomly assigning a string from the main array
    newName2 = getRandName(mainArray);

    //remove newName2 from the main array to avoid duplicate in newName2 and newName3
    mainArray = mainArray.filter(word => word !== newName2);

    // return 3rd random name by randomly assigning a string from the main array
    newName3 = getRandName(mainArray);
};

// in case we still want to take in inputs from users
let userLastName = 'Last Name';
let userFirstName = 'First Name';
let userBirthMonth = 'July';

create3NewNames();
console.log(`Hi ${userFirstName} ${userLastName} whose birth month is ${userBirthMonth}. Your new name is ${newName1} ${newName2} ${newName3}`);