import * as readline from "readline";
import { stdin, stdout } from "process";

const readInput = readline.createInterface({
  input: stdin,
  output: stdout,
});

let CountryList = {
  "India": {
  "Rajasthan": [ "Gujrat", "Punjab", "Haryana" ],
  "Gujrat": [ "Rajasthan", "Maharastra", "Madhya Pradesh" ],
  "Jammu & kashmir": [ "Himachal Pradesh", "Punjab" ],
  "Himachal pradesh": [ "Punjab", "Uttarakhand", "Haryana" ],
  "Punjab": [ "Himachal Pradesh", "Haryana", "Rajasthan" ],
  "Haryana": [ "rajasthan", "punjab", "Himachal Pradesh", "Uttar Pradesh" ],
  "Uttarakhand": [ "Himachal Pradesh", "Uttar Pradesh" ],
  "Uttar pradesh": [ "rajasthan", "Uttarakhand", "Haryana", "madhya pradesh", "Bihar", "Jharkhand", "Chattisgarh" ],
  "Bihar": [ "Jharkhand", "west bengal", "Uttar Pradesh" ],
  "Sikkim": [ "West Bengal" ],
  "West bengal": [ "Jharkhand", "Bihar", "Odisha", "Sikkim" ],
  "Jharkhand": [ "West Bengal", "Bihar", "chattisgarh", "Odisha", "Uttar Pradesh" ],
  "Madhya pradesh": [ "Rajasthan", "Uttar Pradesh", "Chattisgarh", "Gujrat", "Maharastra" ],
  "Maharastra": [ "Gujrat", "madhya pradesh", "Goa", "Karnataka", "Chattisgarh", "Telangana" ],
  "Chattisgarh": [ "Maharastra", "madhya pradesh", "Uttar Pradesh", "Jharkhand", "Odisha", "Telangana" ],
  "Odisha": [ "Chattisgarh", "Jharkhand", "West Bengal", "Andra Pradesh", "Telangana" ],
  "Andhra pradesh": [ "Karnataka", "Telangana", "Odisha" ],
  "Telangana": [ "Maharastra", "Chattisgarh", "Odisha", "Andhra Pradesh", "Karnataka" ],
  "Karnataka": [ "Goa", "Maharastra", "Telangana", "Andhra Pradesh", "Tamil Nadu" ],
  "Goa": [ "Maharastra", "Karnataka" ],
  "Tamil Nadu": [ "kerela", "Karnataka" ],
  "Kerala": [ "Tamil Nadu" ],
  "Assam": [ "Meghalaya", "Arunachal Pradesh", "Nagaland", "Manipur", "Mizoram", "Tripura" ],
  "Arunachal pradesh": [ "Assam", "Nagaland" ],
  "Meghalaya": [ "Assam" ],
  "Nagaland": [ "Assam", "Manipur", "arunachal Pradesh" ],
  "Manipur": [ "Nagaland", "Assam", "Mizoram" ],
  "Mizoram": [ "Tripura", "Assam", "Manipur" ]
  },
  "Germany": {
    "Baden-württemberg": [ "Rhineland-Palatinate", "Hesse", "Bavaria" ],
    "Bavaria": [ "Baden-Württemberg", "Hesse", "Thuringia", "Saxony" ],
    "Brandenburg": [ "Mecklenburg-Vorpommern", "Saxony-Anhalt", "Saxony" ],
    "Bremen": [ "Lower Saxony" ],
    "Hamburg": [ "Schleswig-Holstein", "Lower Saxony" ],
    "Hesse": [ "Rhineland-Palatinate", "North Rhine-Westphalia", "Lower Saxony", "Thuringia", "Bavaria", "Baden-Württemberg" ],
    "Lower saxony": [ "Schleswig-Holstein", "Bremen", "Hamburg", "Mecklenburg-Vorpommern", "Saxony-Anhalt", "Hesse", "Thuringia", "North Rhine-Westphalia" ],
    "Mecklenburg-vorpommern": [ "Schleswig-Holstein", "Lower Saxony", "Brandenburg" ],
    "North rhine-westphalia": [ "Rhineland-Palatinate", "Hesse", "Lower Saxony" ],
    "Rhineland-palatinate": [ "North Rhine-Westphalia", "Hesse", "Baden-Württemberg", "Saarland" ],
    "Eaarland": [ "Rhineland-Palatinate" ],
    "Eaxony": [ "Saxony-Anhalt", "Thuringia", "Brandenburg", "Bavaria" ],
    "Saxony-anhalt": [ "Brandenburg", "Lower Saxony", "Thuringia", "Saxony" ],
    "Schleswig-holstein": [ "Lower Saxony", "Hesse", "Mecklenburg-Vorpommern" ],
    "Thuringia": [ "Saxony-Anhalt", "Saxony", "Bavaria", "Lower Saxony", "Hesse" ]
  },
  "Malaysia": {
    "Perlis": [ "Kedah" ],
    "Kedah": [ "Perlis", "Penang", "Perak" ],
    "Penang": [ "Kedah", "Perak" ],
    "Perak": [ "Kedah", "Penang", "Kelantan", "Selangor", "Pahang" ],
    "Kelantan": [ "Pahang", "Perak", "Terengannu" ],
    "Terengannu": [ "Kelantan", "Pahang" ],
    "Selangor": [ "Perak", "Pahang", "Negeri Sembilan" ],
    "Pahang": [ "Selangor", "Perak", "Kelantan", "Terengannu", "Negeri Sembilan", "Johor" ],
    "Negeri sembilan": [ "Selangor", "Pahang", "Johor", "Malacca" ],
    "Malacca": [ "Negeri Sembila", "Johor" ],
    "Johor": [ "Malacca", "Negeri Sembila", "Johor" ],
    "Sabah": [ "Sarawak" ],
    "Sarawak": [ "Sabah" ]
  },
  "Austria": {
    "Vorarlberg": [ "Tyrol" ],
    "Tyrol": [ "Vorarlberg", "Salzburg" ],
    "Carinthia": [ "Tyrol", "Salzburg", "Styria" ],
    "Styria": [ "carinthia", "Upper Austria", "Vienna" ],
    "Upper austria": [ "Styria", "Salzburg", "Vienna" ],
    "Salzburg": [ "Tyrol", "Upper Austria", "Styria", "Carinthia" ],
    "Vienna": [ "Styria", "Upper Austria", "Burgenland" ],
    "Burgenland": [ "Vienna", "Styria" ]
  },
  "Somalia": {
    "Somaliland": [ "Puntland" ],
    "Puntland": [ "Somaliland", "Galmudug" ],
    "Galmudug": [ "Puntland", "Hirshabelle" ],
    "Hirshabelle": [ "Galmudug", "Mogadishu", "South West State" ],
    "Mogadishu": [ "Hirshabelle", "South West State" ],
    "South west state": [ "Hirshabelle", "Mogadishu", "Jubaland" ],
    "Jubaland": [ "South West State" ]
  }

}

main();

function main(){
  console.log("List of all available Countries are :- \n");

  Object.keys(CountryList).forEach(countryname=>
    console.log(countryname))
 
  readInput.question("\nEnter country name from above: ", (countryname) => {
    console.log("\nAll the States in the country " + countryname + "\n");
    Object.keys(CountryList[countryname as keyof typeof CountryList]).forEach((statename)=>{
      console.log(statename)
   })

    readInput.question("\nEnter state name from all the available states : ", (state) => searchneighbouringstate(countryname, state))
  });
}

function searchneighbouringstate(countryname, statename) {
  console.log("\nAdjacent states of " + statename + ":- \n");
  CountryList[countryname][statename.toLowerCase()].forEach((neighbouringstates)=>{
    console.log(neighbouringstates)
  })
}