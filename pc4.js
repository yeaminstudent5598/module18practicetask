// var myScore = 80;
// var mizanScore = 90;
// if (myScore > 80) {
//     if (mizanScore > 80) {
//         console.log ('go to lunch');
//     }
//     else if (mizanScore >= 60) {
//         console.log('Tell your friend, good luck next time.');
//     } else if (mizanScore >= 40 ) {
//         console.log ( 'Keep your friends message unseen.');
//     } else {
//         console.log('Block your friend.');
//     } 
// }
friendScore(85, 90);
function friendScore (yourScore, friendScore) {
    if (yourScore > 80) { 
        if (friendScore > 80) { 
            console.log("Go for a lunch.");
        } else if (friendScore >= 60) { 
            console.log("Tell your friend, good luck next time.");
        } else if (friendScore >= 40) { 
            console.log("Keep your friend's message unseen.");
        } else { 
            console.log("Block your friend.");
        }
    } else { 
        console.log("Go to home and sleep and act sad.");
    }
}

  
