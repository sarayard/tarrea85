menu_list_array = [ "Veg Margarita Pizza",                  
                    "Pollo Tandoori Pizza",
                    "Veg Suprema Pizza",
                    "Paneer Tikka Pizza",
                    "Deluxe Veggie Pizza",
                    "Veg Extravaganza Pizza"]; //Nombres de pizzas


function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Da el nombre de identificación apropiado como ver_menú
    document.getElementById("display_menu").innerHTML = htmldata;
}


function add_suggestion(){
    var item = document.getElementById("add_item").value;
    //Utiliza la función push() para empujar el elemento en menu_list_array
    menu_list_array.push(item);
}



