const quotes = [
  {quote:"isipojipa leo itajipa kesho na isipojipa kesho itajipa kesho kutwa cha muhimu ni kujaribu daily",author:"unknown youth"},
  {quote:"actions speak louder than silence 😶",author:"Johnte "},
  {quote:"life is a joke",author:"joseck"},
  {quote:"yesterday is a bygone and tomorow will never come 'present'-solid gift of reality",author:"prof Obudho"},
  {quote:"play that role perfectly",author:"john_X"},
  {quote:"man is what he thinks",author:"bible proverb"},
  {quote:"A man is what he hides",author:"chess"},
  {quote:"life is like a chess",author:"Harold finch"},
  {quote:"in the end we are all alone ",author:"Mr reese"},
  {quote:"the ideal state is by attaining HIS concious",author:"pope johnpaul "}
];
function random(){
  let number = Math.floor(Math.random() * 11);
  document.querySelector(".auther").innerHTML = quotes[number].author;
  document.querySelector(".quote").innerHTML = quotes[number].quote;
  
}
