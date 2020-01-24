const courseData = {
  intro: {
    page1: {
      pageType: 'display',
      elements: {
        heading: 'Introduction',
        image1: {
          draggable: 'false',
          size: 'big',
          href: 'plane.jfif',
          altText: 'An airplane in a forest.',
          floatSide: 'right'
        },
        paragraph1:
          'Flight is the process by which an object moves through an atmosphere (or beyond it, as in the case of spaceflight) without contact with the surface. This can be achieved by generating aerodynamic lift associated with propulsive thrust, aerostatically using buoyancy, or by ballistic movement.',
        paragraph2:
          'Many things can fly, from natural aviators such as birds, bats, and insects, to human inventions like aircraft, including airplanes, helicopters, balloons, and rockets which may carry spacecraft.',
        paragraph3:
          'The engineering aspects of flight are the purview of aerospace engineering which is subdivided into aeronautics, the study of vehicles that travel through the air, and astronautics, the study of vehicles that travel through space, and ballistics, the study of the flight of projectiles.',
        subHeading: "Click the 'Next' button to begin the lesson."
      }
    },
    page2: {
      pageType: 'display',
      elements: {
        heading: 'Introduction Continued...',
        image1: {
          draggable: 'false',
          size: 'big',
          href: 'spaceman.jpg',
          altText: 'An astronaut floating above the Earth.',
          floatSide: 'left'
        },
        paragraph1:
          'While the observation of objects in space, known as astronomy, predates reliable recorded history, it was the development of large and relatively efficient rockets during the mid-twentieth century that allowed physical space exploration to become a reality. Common rationales for exploring space include advancing scientific research, national prestige, uniting different nations, ensuring the future survival of humanity, and developing military and strategic advantages against other countries.',
        paragraph2:
          'Space exploration is the use of astronomy and space technology to explore outer space. While the study of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight.',
        image2: {
          draggable: 'false',
          size: 'tiny',
          href: 'rocketship.png',
          altText: 'A rocketship blasting off.'
        },
        image3: {
          draggable: 'false',
          size: 'tiny',
          href: 'moon.png',
          altText: "The Earth's moon, Luna."
        }
      }
    }
  },
  lesson1: {
    page1: {
      pageType: 'display',
      elements: {
        heading: 'Lesson 1 Page 1',
        paragraph1:
          'Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.',
        list1: {
          listType: 'ul',
          listItems: {
            listItem1: 'The atom is the basic unit of chemistry',
            listItem2: 'An element is composed of a single atom',
            listItem3: 'A compound is composed of more than one element'
          }
        },
        paragraph2:
          'Chemistry addresses topics such as how atoms and molecules interact via chemical bonds to form new chemical compounds. There are four types of chemical bonds: covalent bonds, in which compounds share one or more electron(s); ionic bonds, in which a compound donates one or more electrons to another compound to produce ions (cations and anions); hydrogen bonds; and Van der Waals force bonds.',
        image1: {
          draggable: 'false',
          size: 'little',
          href: 'little1.png',
          altText: 'A beaker filled with chemicals.'
        },
        image2: {
          draggable: 'false',
          size: 'little',
          href: 'little2.png',
          altText: 'A beaker filled with chemicals.'
        },
        image3: {
          draggable: 'false',
          size: 'little',
          href: 'little3.png',
          altText: 'A beaker filled with chemicals.'
        }
      }
    },
    page2: {
      pageType: 'display',
      elements: {
        heading: 'Lesson 1 Page 2',
        video: {
          href: 'test.mp4',
          altText: 'A test video.',
          floatSide: 'right'
        },
        subHeading: 'A Detailed Look at Wascally Wabbits',
        paragraph1:
          "Rabbits are small mammals in the family Leporidae of the order Lagomorpha (along with the hare and the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit. Sylvilagus includes 13 wild rabbit species, among them the seven types of cottontail. The European rabbit, which has been introduced on every continent except Antarctica, is familiar throughout the world as a wild prey animal and as a domesticated form of livestock and pet. With its widespread effect on ecologies and cultures, the rabbit (or bunny) is, in many areas of the world, a part of daily life—as food, clothing, a companion, and as a source of artistic inspiration.",
        list1: {
          listType: 'ol',
          listItems: {
            listItem1: 'Item 1 is a Rabbit',
            listItem2: "Item 2 is the Rabbit's house",
            listItem3: "Item 3 is the Rabbit's food stash",
            listItem4: 'Item 4 is the Snake',
            listItem5: "Item 5 is the Rabbit inside of the Snake's belly"
          }
        }
      }
    },
    page3: {
      pageType: 'challenge',
      elements: {
        heading: 'The best type of household buddy is:',
        form1: {
          type: 'radio',
          options: {
            option1: 'Cat',
            option2: 'Dog',
            option3: 'Pig',
            option4: 'Ferret'
          },
          answers: {
            answer1: 'option2'
          }
        }
      }
    },
    page4: {
      pageType: 'challenge',
      elements: {
        heading: 'Which character(s) could defeat Monday?',
        form1: {
          type: 'checkbox',
          options: {
            option1: 'Superman',
            option2: 'Mister Bean',
            option3: 'Garfield',
            option4: 'Captain Planet'
          },
          answers: {
            answer1: 'option1',
            answer2: 'option2',
            answer3: 'option4'
          }
        }
      }
    },
    page5: {
      pageType: 'challenge',
      elements: {
        heading: 'How is it that magic sail boats can fly?',
        subHeading: 'It is through the use of:',
        dropdown1: {
          options: {
            option1: 'Burritos',
            option2: 'Magic',
            option3: 'Tinfoil sails',
            option4: 'The Government',
            option5: 'Science',
            option6: 'Alien technology'
          },
          answers: {
            answer1: 'option2'
          }
        },
        subHeading: 'and with the help of:',
        dropdown2: {
          options: {
            option1: "Some good ol' Tom-foolery",
            option2: 'Two double cheeseburgers with extra pickles',
            option3: 'A powerful computer',
            option4: 'An anti-gravity engine',
            option5: 'A magic wand',
            option6: 'A washed up secret agent crying hysterically',
            option7: 'Jeeves, the helpful butler'
          },
          answers: {
            answer1: 'option5'
          }
        }
      }
    },
    page6: {
      pageType: 'dragAndDrop',
      elements: {
        heading: 'Match the terms with their definition:',
        image1: {
          draggable: 'true',
          href: 'option1.png',
          altText: 'The first selection option.'
        },
        image2: {
          draggable: 'true',
          href: 'option2.png',
          altText: 'The second selection option.'
        },
        image3: {
          draggable: 'true',
          href: 'option3.png',
          altText: 'The third selection option.'
        },
        definitions: {
          definition1: 'A third selection option.',
          definition2:
            'Sometimes the most desired selection, but always the second option.',
          definition3: 'An option that is the first choice.'
        }
      }
    }
  },
  conclusion: {
    page1: {
      pageType: 'display',
      elements: {
        heading: 'Course Conclusion',
        subHeading: 'You have completed the course!',
        paragraph1:
          'In criminal law, in certain jurisdictions, criminal prosecutions are brought in the name of the People. Several U.S. states, including California, Illinois, and New York, use this style.',
        paragraph2:
          "A People's Republic is typically a Marxist or socialist one-party state that claims to govern on behalf of the people even if it in practice often turns out to be a dictatorship. Populism is another umbrella term for various political tendencies that claim to represent the people."
      }
    }
  }
};
