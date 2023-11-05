const rock = () => "rock";

const paper = () => "paper";

const scissors = () => "scissors";

function play(par1, par2) {
    if ((par1 === rock && par2 === paper) || (par1 === paper && par2 === rock)) {
        return "paper win!";
    } else if ((par1 === rock && par2 === scissors) || (par1 === scissors && par2 === rock)) {
        return "rock win!";
    } else if (((par1 === paper && par2 === scissors) || (par1 === scissors && par2 === paper))) {
        return "scissors win!";
    } else {
        return "draw!";
    }
}

console.log(play(rock, paper));

