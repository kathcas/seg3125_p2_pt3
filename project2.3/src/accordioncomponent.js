import AccordionItem from "./accordion";

const Accordion = () => {
    const items = [
      { title: 'Check-in Etiquette', content: 'Check-in time is from 3:00 PM to 7:00 PM. If you anticipate arriving outside these hours, please notify us in advance. Upon arrival, head to the main office or designated lockbox to collect your keys; instructions for the lockbox code will be provided in your reservation confirmation email. Have your reservation confirmation and a valid ID ready for verification at check-in.' },
      { title: 'Check-out Etiquette', content: "Check-out time is 11:00 AM. Late check-outs may be available upon request but must be arranged in advance. Please leave the cottage in a neat and orderly condition. Wash any used dishes, take out the trash, and ensure all personal belongings are packed. Return the keys to the main office or lockbox as instructed. If you have lost the keys, notify us immediately. Before leaving, do a final walkthrough to ensure you haven't left anything behind and that the cottage is secure." },
      { title: 'What is a cottage?', content: 'A cottage is a plae you stay in the summer for fun :)' }
    ];
  
    return (
      <div>
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    );
  };
  
  export default Accordion;
  