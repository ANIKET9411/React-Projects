import Footer from "../../component/Footer/Footer";
import Main_Quote from "../../component/Main_Quote/Main";
function Quotepage() {
  const quote_list = [
    {
      quote:
        "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      writer: "Adam Scott",
    },
    {
      quote:
        "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
      writer: "Calvin Trillin",
    },
    {
      quote:
        "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
      writer: "Calvin Trillin",
    },
    {
      quote: "Tell me what you eat, and I will tell you what you are.",
      writer: "Cyra McFadden",
    },
    {
      quote: "Health food makes me sick.",
      writer: "Eike von Repkow",
    },
    {
      quote:
        "The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.",
      writer: "Epictetus",
    },
    {
      quote: "I no longer prepare food or drink with more than one ingredient.",
      writer: "Epictetus",
    },
    {
      quote:
        "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, Your fatness is an affront to me, so we have the right to treat you as offensively as you appear. Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
      writer: "Anthelme Brillat-Savarin",
    },
    {
      quote:
        "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
      writer: "Alice May Brock",
    },
    {
      quote:
        "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
      writer: "Albert Einstein",
    },
    {
      quote:
        "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      writer: "Adelle Davis",
    },
    {
      quote:
        "Music with dinner is an insult both to the cook and the violinist.",
      writer: "",
    },
    {
      quote:
        "Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean.",
      writer: "",
    },
    {
      quote:
        "We don't get fat because we overeat; we overeat because we're getting fat.",
      writer: "",
    },
    {
      quote: "Good food ends with good talk.",
      writer: "",
    },
    {
      quote: "There is no love sincerer than the love of food.",
      writer: "",
    },
    {
      quote:
        "What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease.",
      writer: "",
    },
    {
      quote: "It's important to begin a search on a full stomach.",
      writer: "",
    },
    {
      quote:
        "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
      writer: "",
    },
    {
      quote: "My favourite animal is steak.",
      writer: "",
    },
    {
      quote: "Food is an important part of a balanced diet.",
      writer: "",
    },
  ];
  return (
    <>
      {quote_list.map((ele) => {
        return (
          <Main_Quote key="ele.quote" quote={ele.quote} writer={ele.writer} />
        );
      })}
      <Footer />
    </>
  );
}
export default Quotepage;
