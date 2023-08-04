import Accordion from "./Accordion";

export default {
    title: "Components/Accordion",
    component: Accordion
}

const Template = (args) => <Accordion {...args} />;
export const Faqs = Template.bind({});
Faqs.args = {
    data: [
        {
            title: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "Why do we use it?",
            content: "It is a long established fact that a reader will be distracted by the readable content of a paragraph. Using meaningless dummy text provides a better user experience when testing."
        },
    ],
};