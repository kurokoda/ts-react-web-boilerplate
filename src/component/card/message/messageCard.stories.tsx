import { MessageCard } from "./messageCard";

const $MessageCard = () => {
    return (
        <MessageCard
            height="calc(100vh - 20px)"
            text="I'm baby next level actually tousled cliche small batch sriracha. Chicharrones tacos tbh hashtag. Listicle salvia occupy green juice, hexagon iceland readymade taxidermy ramps direct trade tumblr."
            title="Message Card Title"
            icon="person"
        />
    );
};

export default {
    title: "components/cards/messageCard",
    component: $MessageCard,
};

export { $MessageCard };
