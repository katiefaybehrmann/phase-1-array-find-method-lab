function superbowlWin(array) {
    let won = array.find((item) => item.result === "W") 
        if (won){
            won = won.year;
        }
        return won;
}


