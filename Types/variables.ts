// ######################################################
// *** STRINGS

let movieTitle: string = "TED";

movieTitle = "Hangover";
// movieTitle = 11; ERROR
movieTitle.toUpperCase();
// movieTitle.round() ERROR



// ######################################################
// *** NUMBERS (Float, Int etc.)

let myNumber: number = 42;
// myNumber = "Hello Number"; ERROR
myNumber = 143;


// ######################################################
// ** BOOLEAN (true, false)

const myBoolean: boolean = true;
// myBoolean = "false"; ERROR
// myBoolean = 122; ERROR
// myBoolean = false; ERROR (because of CONST, but no error with LET)



// ######################################################
// *** TYPE INFERENCE

let tvShow = "DARK";
// tvShow = false; ERROR
// tvShow = 888; ERROR
// tvShow(); ERROR

let isFunny = true;

isFunny = false;
// isFunny = "yes"; ERROR


// ######################################################
// *** ANY
// NOTE: It Sort Of Defeats The Purpose Of TypeScript an Types. So use it Sparingly!

let fruit: any = "mango";
fruit = true;
fruit = 'banana';
fruit = 1919;
fruit();
fruit.toUpperCase();

// ANY (usecase)

const vegetables = ["potato", "spinach", "carrot", "brinjal", "ladyfinger"];

let favouriteVegetable: string;

for (let veg of vegetables) {
    if (veg === "potato") {
        favouriteVegetable = veg;
    }
}