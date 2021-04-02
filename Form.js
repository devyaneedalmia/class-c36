class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(130, 10);


        var input = createInput("Name")
        input.position(130, 160);


        var button = createButton('play')
        button.position(250, 200);

        
        var greeting = createElement('h3')
        greeting.html("Hello!" +name)
        greeting.position(130, 160);

    }
}