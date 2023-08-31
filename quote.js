var quoteList = [
    {
        quote: "“Is that a yes?”<br><br>”Yes, I’ll come out.”<br><br>”Really? No, don’t answer—I shan’t give you a chance to change your mind. Let’s away!”"
        ,author: "Mackenzi Lee, Gentleman's Guide to Vice and Virtue"
    },
    {
        quote: "Suddenly, while you aren’t paying attention, everything’s changed."
        ,author: "Laurie Frankle, This is How It Always Is"
    },
    {
        quote: "‘Of course I can.’ Penn held her closer still.<br><br>‘Because you know what’s even better than happy endings?'<br><br>‘What?’<br><br>‘Happy middles.’<br><br>‘You think?’<br><br>‘All the happy with none of the finality. All the happy with enough room to grow. What could be better than all that?'"
        ,author: "Laurie Frankle, This is How It Always Is"
    },
    {
        quote:"“You’ve lost, Nefarian,” Skulduggery said. “Even your henchman is abandoning you. Even he recognises your defeat. I’m placing you under arrest for murder, attempted murder, conspiracy to commit murder and, I don’t know, possibly littering.” "
        ,author:"Derek Landy, Skulduggery Pleasant"
    },
    {
        quote:"From here on out, I intend to have a damn good life. It will not be easy, but it will be good."
        ,author:"Mackenzi Lee, Gentleman's Guide to Vice and Virtue"
    },
    {
        quote:"“Like you mean it,” Scipio says. “Like you mean to protect yourself.”<br>I think of my father—not of him swinging at me, but of all the times he’s told me how pathetic I am. How useless and hopeless and embarrassing I am, good for nothing and will amount to nothing and nothing, nothing, nothing, nothing—reason after reason until I had begun to believe it wasn’t worth putting up my hands.<br>And here’s Scipio, telling me I’m worth defending."
        ,author:"Mackenzi Lee, Gentleman's Guide to Vice and Virtue"
    },
    {
        quote:"“That hurt,” he said with a smile.<br><br>”I can make this easy on you.”<br><br>”You gonna give me that sword of yours?”<br><br>”No, but if you tell me what Baron Vengeous is planning, I’ll let you walk away from this.”<br><br>He frowned. “But I drove here.”<br><br>”This is a one-time offer, Mr Sanguine.”"
        ,author:"Derek Landy, Skulduggery Pleasant"
    },
    {
        quote:"“Detective,” he murmured.<br><br>”Dusk,” Skulduggery said. “It’s been a while. Still evil?”<br><br>The man called Dusk smiled. “When the mood takes me.” He gestured to the young couple. “Allow me to introduce you to my friends. I like to call them Minion One and Minion Two. You can decide among yourselves which one is which.”"
        ,author:"Derek Landy, Skulduggery Pleasant: Playing With Fire"
    },
    {
        quote:"Looking down at the monster, just another lost child, Agatha thought of all the creatures in this world. They didn’t follow orders because they were loyal. They didn’t help princesses because they were loving. They did it because someday, maybe loyalty and love would be repaid with a second chance at being human. Only through a fairy tale could they find their way back. To their imperfect selves. To their storyless lives. She too was one of these animals now, searching for the way out."
        ,author:"Soman Chainani, The School for Good and Evil"
    },
    {
        quote:"Agatha wondered what these girls’ souls would wish for. Depth, perhaps."
        ,author:"Soman Chainani, The School for Good and Evil"
    },
]



function generateQuote(){

    var randomNum = Math.floor(Math.random() * quoteList.length);

    console.log(quoteList[randomNum].quote + quoteList[randomNum].author);

    document.getElementById("quoDisplay").innerHTML = quoteList[randomNum].quote;
    document.getElementById("quoAuthor").innerHTML = "—" + quoteList[randomNum].author;
}

