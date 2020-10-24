
const sentences = [];

function createSentences(){
    
}

function createMessage(){
    const good =['Good things will happen for you', 'I like the way things are going', 'ur a real cutie'];
    const bad = ['Bad things are heading your way', 'Better be wary of people today', 'u will be hurting soon'] ;
    const neutral = ['Just another day', 'you should eat', 'water is good for you'];
    const message = [];
    for(i=0;i<3;i++){
        const rando = Math.floor(Math.random()*3);
        if(rando === 1){
            message.push(good[rando]);
        }
        else if(rando === 2){
            message.push(bad[rando]);
        }
        else{
            message.push(neutral[rando]);
        }
    }
};