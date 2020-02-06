const courseData = {
  Introduction: {
    page1: {
      pageType: 'display',
      pageName: 'The Rules of Flight',
      title: 'rulesofflight',
      elements: {
        heading: 'Introduction',
        image1: {
          draggable: 'false',
          size: 'big',
          // href: 'https://i.imgur.com/Ay6uTAe.jpg',
          href: 'images/flight.jpg',
          altText: 'Two small airplanes in the sky.',
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
      pageName: 'Humans in Space',
      title: 'humansinspace',
      elements: {
        heading: 'Introduction Continued...',
        image1: {
          draggable: 'false',
          size: 'big',
          // href: 'https://i.imgur.com/4sBJ2nT.jpg',
          href: 'images/spaceman.jpg',
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
          // href: 'https://i.imgur.com/Jk2TIdg.png',
          href: 'images/rocketship.png',
          altText: 'A rocketship blasting off.'
        },
        image3: {
          draggable: 'false',
          size: 'tiny',
          // href: 'https://i.imgur.com/h8Bu1aQ.png',
          href: 'images/moon.png',
          altText: "The Earth's moon, Luna."
        }
      }
    }
  },
  'Lesson 1': {
    page1: {
      pageType: 'display',
      pageName: 'Science Guides the Way',
      title: 'scienceguides',
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
          // href: 'https://i.imgur.com/jsk9Dmt.png',
          href: 'images/little1.png',
          altText: 'A beaker filled with chemicals.'
        },
        image2: {
          draggable: 'false',
          size: 'little',
          // href: 'https://i.imgur.com/fwr8d08.png',
          href: 'images/little2.png',
          altText: 'A beaker filled with chemicals.'
        },
        image3: {
          draggable: 'false',
          size: 'little',
          // href: 'https://i.imgur.com/1QcFc4w.png',
          href: 'images/little3.png',
          altText: 'A beaker filled with chemicals.'
        },
        audio1: {
          href: 'audio/mc30.mp3'
        }
      }
    },
    page2: {
      pageType: 'display',
      pageName: 'A Word On Rabbits',
      title: 'wordonrabbits',
      elements: {
        heading: 'Lesson 1 Page 2',
        video: {
          href: 'video/fly.mp4',
          altText: 'A test video.',
          floatSide: 'right'
        },
        subHeading: 'A Detailed Look at Wascally Wabbits',
        paragraph1:
          "Rabbits are small mammals in the family Leporidae of the order Lagomorpha (along with the hare and the pika). Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds of domestic rabbit. Sylvilagus includes 13 wild rabbit species, among them the seven types of cottontail. The European rabbit, which has been introduced on every continent except Antarctica, is familiar throughout the world as a wild prey animal and as a domesticated form of livestock and pet. With its widespread effect on ecologies and cultures, the rabbit (or bunny) is, in many areas of the world, a part of daily life—as food, clothing, a companion, and as a source of artistic inspiration.",
        list1: {
          listType: 'ol',
          listItems: {
            listItem1: 'It takes wings to fly',
            listItem2: 'The clouds can get quite cold',
            listItem3: "Airplanes usually don't have feathers",
            listItem4:
              'There is often a pilot and a copilot flying an aircraft',
            listItem5: 'Superman can fly'
          }
        }
      }
    },
    page3: {
      pageType: 'challenge',
      pageName: 'Household Buddies',
      title: 'householdbuddies',
      elements: {
        heading: 'The best type of household buddy is:',
        form1: {
          type: 'radio',
          options: {
            option1: 'Demon-Cat',
            option2: 'Doggo',
            option3: 'Piggy',
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
      pageName: 'The Monday Conundrum',
      title: 'mondayconundrum',
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
      pageName: 'Magic Sail Boats',
      title: 'magicsailboats',
      elements: {
        heading: 'How is it that magic sail boats can fly?',
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
        }
      }
    },
    page6: {
      pageType: 'challenge',
      pageName: 'So Many Options',
      title: 'somanyoptions',
      elements: {
        heading: 'Match each term with its definition:',
        dragdrop1: {
          items: {
            image1: {
              draggable: 'true',
              // href: 'https://i.imgur.com/szak2vY.png',
              href: 'images/option1.png',
              altText: 'The first selection option.'
            },
            image2: {
              draggable: 'true',
              // href: 'https://i.imgur.com/CP9pvXu.png',
              href: 'images/option2.png',
              altText: 'The second selection option.'
            },
            image3: {
              draggable: 'true',
              // href: 'https://i.imgur.com/ZG67skY.png',
              href: 'images/option3.png',
              altText: 'The third selection option.'
            }
          },
          definitions: {
            definition1: 'A third selection option.',
            definition2:
              'Sometimes the most desired selection, but always the second option.',
            definition3: 'An option that is the first choice.'
          },
          answers: {
            answer1: ['image1', 'definition3'],
            answer2: ['image2', 'definition2'],
            answer3: ['image3', 'definition1']
          }
        }
      }
    }
  },
  Conclusion: {
    page1: {
      pageType: 'display',
      pageName: 'Course Conclusion',
      title: 'conclusion',
      elements: {
        heading: 'Course Conclusion',
        subHeading: 'You have completed the course!',
        paragraph1:
          'The spread of the large and increasing population of humans has profoundly affected much of the biosphere and millions of species worldwide. Advantages that explain this evolutionary success include a larger brain with a well-developed neocortex, prefrontal cortex and temporal lobes, which enable advanced abstract reasoning, language, problem solving, sociality, and culture through social learning.',
        paragraph2:
          'Humans uniquely use such systems of symbolic communication as language and art to express themselves and exchange ideas, and also organize themselves into purposeful groups. Humans create complex social structures composed of many cooperating and competing groups, from families and kinship networks to political states. Social interactions between humans have established an extremely wide variety of values, social norms, and rituals, which together undergird human society.'
      }
    }
  }
};
