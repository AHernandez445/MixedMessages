console.log("Hello World");

const randomMessage = () =>{
    const firstPart = ["You are", "you will", "something"];
    const secondPart = ["going to", "have a", "are very", "terrible"];
    const thirdPart = ["have a great day", "have a shitty day", "very strong"];

    const randomOne = firstPart[Math.floor(Math.random() * 2)];
    const randomTwo = secondPart[Math.floor(Math.random() * 2)];
    const randomThree = thirdPart[Math.floor(Math.random() * 2)];

    $("#output").text(`${randomOne} ${randomTwo} ${randomThree}`);
}