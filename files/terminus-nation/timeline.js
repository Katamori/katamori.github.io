/*

Terminus Nation JSON template

calendar options:
- BY: Beacon Year
- KW: Kvahk'er'Weplec
- RD: Republic Date
- RY: Resistance Year
- IC: Initial Contact
- CD: CyberDomini
- UD: Union Day

year: whole integer
month: 0 if not defined, otherwise 1-12
day: 0 if not defined, otherwise 1-31 (depending on month)

race:
- general event
- human
- Aurost
- Cloudan
- Sun Serpent
- Shaper
- minor race

faction: obvious; this is what going to be the main definer
		 (in case of minor races, this is the race definer too)
		 (can be used for important planets, too)
		 (also optional - in that case, use "unspecified")
		 (when conflicts come out, write the ATTACKER to this field)

context: differentiating inventions, culture and such

content: description of the event


*/

var timelineJSON = [


    {
        calendar:"BY", year:-10000000000, month:0, day:0,
        race:"Shaper", faction:"unspecified", context:"main",
        content:"Earliest known evidence of the existence of the Shapers.",

    },

    {
        calendar:"BY", year:-1000000000, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"Estimated age of the oldest Planet Monument."
    },



/* 900 to 100 million years ago */

    {
        calendar:"BY", year:-400000000, month:0, day:0,
        race:"Shaper", faction:"Kidar Manedorgtem", context:"main",
        content:"Kidar Manedorgtem unifies the Shaper race within the Filament Supercluster.",

    },

    {
        calendar:"BY", year:-150000000, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"The cult of Vermyys emerges in Shaper culture."
    },

    {
        calendar:"BY", year:-100000000, month:0, day:0,
        race:"Shaper", faction:"unspecified", context:"main",
        content:"Earliest estimated date of the Shaper Ascension into the Starless Space.",

    },


/* 100 to 10 million years ago */

    {
        calendar:"BY", year:-72000000, month:0, day:0,
        race:"Cloudan", faction:"unspecified", context:"main",
        content:"Cloudan race evolves from an ancient metal-silicon hybrid based "+
                "avian predator species, by accomodating to a pseudo-ground lifeform.",

    },


    {
        calendar:"BY", year:-70000000, month:0, day:0,
        race:"Shaper", faction:"unspecified", context:"main",
        content:"Latest estimated date of the Shaper Ascension.",

    },

    {
        calendar:"BY", year:-68000000, month:0, day:0,
        race:"Cloudan", faction:"unspecified", context:"main",
        content:"A Planet Monument Core hits Sme, the Cloudan homeworld. The resulting "+
                "ecological disaster almost exterminates the Cloudan race, with only the "+
                "toughest and solely the flightless members have survived.\n\n "+
                "This event has defined both the cultural and the genetic traits of the "+
                "race for the rest of their history.",

    },














/* Beacon World Era */

    {
        calendar:"BY", year:-30000, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"The beginning of the Beacon World Era. The estimated age of the youngest Planet Monument."
    },









    {
        calendar:"BY", year:1, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"The most recent Beacon World Activation Event. Ezbekuar's Gate is activated by Cloudan forces, "+
		"teleporting them to Regh. Majority of Cloudan, Sun Serpent and minor beings are destroyed.\n\n"+
        "With the last surviving Shaper beings leaving the Cosmic Disk, every active evidence of the Shaper "+
        "influence disappears from the galaxy.",
    },

    {
        calendar:"BY", year:728, month:0, day:0,
        race:"AI", faction:"Dark Machine", context:"main",
        content:"Menri, the secondary AI of Kidar Manedorgtem, after realizing the Shapers are gone forever,"+
        "uploads its consciousness to a gigantic 'brain' it built over the course of a few centuries, and "+
        "sends it to interstellar orbit.",
    },




















    {
        calendar:"BY", year:554932, month:0, day:0,
        race:"AI", faction:"Dark Machine", context:"main",
        content:"Aurosts accidentally woke up an ancient Shaper AI they found orbiting around a star "+
        "for some thousand years,",
    },





    {
        calendar:"BY", year:556714, month:0, day:0,
        race:"AI", faction:"Dark Machine", context:"conflict",
        content:"After long sequences of analysis, the Dark Machine reaches the conclusion that "+
        "the Cloudan is the only rightful civilization to exist within the Cosmic Disk. As a "+
        "response, it begins systematic eradication of the other races.",
    },


/* Serpent Resurrection */












    {
        calendar:"KW", year:1, month:0, day:0,
        race:"Sun Serpent", faction:"Sun Serpent Empire", context:"main",
        content:"The beginning of the in-galaxy history of the Sun Serpents; an event they call the Serpent " +
		"Resurrection. After defeating the siege of both the Dark Machine and the Cloudans, the " +
        "remaining Sun Serpents settle down on a planet only known as Seupi-wuewu (meaning City to the Star of " +
		"the Sky in their language), and build their first Sun Temple.\n\n",
    },



    {
        calendar:"KW", year:1, month:6, day:1,
        race:"Sun Serpent", faction:"Sun Serpent Empire", context:"main",
        content:"The Dark Machine is sealed and hibernated for 100 thousand years.",
    },




    {
        calendar:"KW", year:32142, month:0, day:0,
        race:"Cloudan", faction:"unspecified", context:"conflict",
        content:"Beginning of the all-out warfare between the Cloudans and the Aurosts and the Sun Serpents, " +
		"known as the Immortal War.",
    },
    {
        calendar:"KW", year:32908, month:0, day:0,
        race:"Cloudan", faction:"unspecified", context:"conflict",
        content:"End of the Immortal War.",
    },









    {
        calendar:"KW", year:84661, month:0, day:0,
        race:"Sun Serpent", faction:"Ontenedian tribes", context:"main",
        content:"Beginning of the Age of Tribes on Ontenedis.",
    },











/* Human Dawn */












    {
        calendar:"KW", year:97701, month:0, day:0,
        race:"human", faction:"unspecified", context:"colonization",
        content:"The first man-made space ship that was able to cross the Frontier lands with 100 "+
		"thousand cryosleeping people on planet Volada.",
    },

    {
        calendar:"KW", year:97853, month:0, day:0,
        race:"Cloudan", faction:"Cloudan Confederacy", context:"conflict",
        content:"The Cloudan Confederacy launches another war against the rival races.",
    },


    {
        calendar:"KW", year:100000, month:6, day:1,
        race:"AI", faction:"Dark Machine", context:"main",
        content:"After 100 thousand years of hibernation, the Dark Machine reactivates on Volada. "+
        "Humans are evacuated to stay safe from the immediate danger - as a result, Volada keeps "+
        "uninhabited for the rest of history.",
    },
    {
        calendar:"KW", year:100000, month:8, day:12,
        race:"Cloudan", faction:"Cloudan Confederacy", context:"alliance",
        content:"The Cloudan Confederacy allies with the Dark Machine.",
    },










    /* 1RD = 100325KW */
    {
        calendar:"RD", year:1, month:0, day:0,
        race:"human", faction:"Republic", context:"foundation",
        content:"The declaration of the First Democratic Union on Republic Haven, the earliest lawful ancestor of the Republic.",
    },











    {
        calendar:"RD", year:490, month:0, day:0,
        race:"Cloudan", faction:"Cloudan Confederacy", context:"main",
        content:"End of the Second Immortal War.",
    },









    {
        calendar:"RD", year:2691, month:0, day:0,
        race:"human", faction:"Republic", context:"conflict",
        content:"Forces of the Cloudan Confederacy take control over Republic Haven."+
                "The First Democratic Union is considered fallen; survivors retreat to "+
                "the Main Ring to stabilize the region and rebuild what they can from "+
                "the old Republic.<br><br>"+
                "Beginning of the Age of Exile of the FDU.",
    },








    {
        calendar:"RD", year:2830, month:0, day:0,
        race:"human", faction:"Republic", context:"conflict",
        content:"Date of the Jade Incident.",
    },


    {
        calendar:"RD", year:2902, month:0, day:0,
        race:"human", faction:"unspecified", context:"colonization",
        content:"Planet Spire is colonized.",
    },


    {
        calendar:"RD", year:3047, month:0, day:0,
        race:"human", faction:"Republic", context:"conflict",
        content:"United forces of FDU and other factions invade "+
                "Republic Haven, in order to take it back from the Cloudan.",
    },

    {
        calendar:"RD", year:3053, month:0, day:0,
        race:"human", faction:"Republic", context:"conflict",
        content:"FDU forces, after six years of storm, take Republic Haven "+
                "back from the forces of the Cloudan Condeferacy. As a result, "+
                "the Dark Campaingn ends and the FDU is reformed under tha name"+
                "'Union Republic'. <br><br>"+
                "End of the Age of Exile of the FDU.",
    },



    {
        calendar:"RD", year:3171, month:0, day:0,
        race:"human", faction:"Free Heaven Movement", context:"foundation",
        content:"Groups of rebelling non-temporal people unite their forces on "+
                "Borderrealm colony Spire, to form their neo-Christian sect, named "+
                "'Rest in Peace Movement', in order to oppose the anti-non-temporal "+
                "attitude of the Union Republic and to provide a homeland for every "+
                "non-temporal in the galaxy.",
    },



/* Resistance Rise */

    {
        calendar:"RD", year:3426, month:0, day:0,
        race:"human", faction:"Free Heaven Movement", context:"conflict",
        content:"Rest In Peace Movement, political ancestor of the Free Heaven Movement "+
		          "besieges Republic Haven the first time. First year of Resistance Year calendar.",
    },







    {
        calendar:"RD", year:3609, month:0, day:0,
        race:"human", faction:"Free Heaven Movement", context:"foundation",
        content:"Foundation of the Free Heaven Movement.",
    },


    {
        calendar:"RD", year:3722, month:0, day:0,
        race:"human", faction:"Khali", context:"foundation",
        content:"Official foundation date of the Khali.",
    },







    {
        calendar:"RD", year:4431, month:0, day:0,
        race:"human", faction:"unspecified", context:"colonization",
        content:"The first colonists settle down on Neocairo.	",
    },

    {
        calendar:"RD", year:4476, month:0, day:0,
        race:"general", faction:"unspecified", context:"Planet Monument gate event",
        content:"Planet Monument gates on Anberoi close for an unsecified time.",
    },


    {
        calendar:"RD", year:4476, month:0, day:0,
        race:"Cloudan", faction:"Cloudan Confederacy", context:"abandonment",
        content:"The last of the Cloudan inhabitants leave Anberoi through space "+
                "due to a reassignment program of the Overtribe.",
    },

    {
        calendar:"RD", year:4485, month:0, day:0,
        race:"human", faction:"Starcloud Nation", context:"foundation",
        content:"Starcloud Nation is formed.",
    },








    {
        calendar:"RD", year:4832, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Initial contact of Republic units with the nations of Augoma - first year of "+
		"Augoman nations (until the Great Augoma System Siege), and later, the Future Empire.",
    },

    {
        calendar:"RD", year:4870, month:0, day:0,
        race:"human", faction:"Starcloud Nation", context:"conflict",
        content:"First siege of Nebula City, the Starcloud Nation homeworld by the Rhov. "+
                "The faction temporarily makes Turquise Crabtown, a space station near to "+
                "Beacon World their capital.",
    },






    {
        calendar:"RD", year:5000, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Foundation of Augopia, a hidden technology-driven sanctuary buried "+
		"deeply below a mountainous island of the Archipelago."
    },






    {
        calendar:"RD", year:5248, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"The Planet Monument of Augoma closes the connection with Republic planets."
    },




    {
        calendar:"RD", year:5359, month:0, day:0,
        race:"human", faction:"People of Neocairo", context:"foundation",
        content:"The first Pharaoh unifies the shattered lordships, thus establishing the Old Kingdom in Neocairo.",
    },











    {
        calendar:"RD", year:6402, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Boson (Adao Beran) dies; he resurrects on Vekka.",
    },



    {
        calendar:"RD", year:6449, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Second (Richard Cranagel) dies; he resurrects on Augoma.",
    },





    {
        calendar:"RD", year:6516, month:0, day:0,
        race:"general", faction:"unspecified", context:"science",
        content:"Aurost surveillance detects that Beacon World will be depleted within less "+
                "than 1500 years, indicating the approach of the activation of the Gate.",
    },



    {
        calendar:"RD", year:6691, month:0, day:0,
        race:"general", faction:"Boson Conundrum", context:"foundation",
        content:"Adao Beran founds the Boson Conundrum.",
    },

    {
        calendar:"RD", year:6704, month:0, day:0,
        race:"human", faction:"Free Heaven Movement", context:"alliance",
        content:"The Old Kingdom of Neocairo becomes a member of the Free Heaven Movement.",
    },
    {
        calendar:"RD", year:6709, month:0, day:0,
        race:"human", faction:"Boson Conundrum", context:"alliance",
        content:"In exchange of planet Vekka itself, Adao Beran offers military defense for "+
                "its former owners: beginning of the alliance between the Möebius and the "+
                "Boson Conundrum.",
    },


    {
        calendar:"RD", year:6721, month:0, day:0,
        race:"human", faction:"Justice Empire", context:"culture",
        content:"Second releases 'Fairness in Purity'. Born of the Way of Justice.",
    },

    {
        calendar:"RD", year:6746, month:0, day:0,
        race:"human", faction:"Justice Empire", context:"main",
        content:"Gboski of Augoma becomes the first country that applies Way of Justice in practice. "+
		"The Justice Party brings an end to endless inflation in post-war Gboski.",
    },




/* TechWar Age */








    {
        calendar:"RD", year:6833, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Creation of the 'Internet of Augoma'.",
    },
    {
        calendar:"RD", year:6834, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"End of the Afterwar Age on Augoma.",
    },
    {
        calendar:"RD", year:6857, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Establishment of the New Age Protocol, a variation of DFTP; complete control over the internet.",
    },
    {
        calendar:"RD", year:6861, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Creation of Hackfield.",
    },
    {
        calendar:"RD", year:6863, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Declaration of the Coalition.",
    },
    {
        calendar:"RD", year:6868, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"atrocity",
        content:"The Anubis Incident: the rogue AI developed by the Coalition on planet "+
                "Augoma makes a silent takeover on the entire global info-communicational "+
                "infrastructure, with the apparent aim to exterminate the population. Turned "+
                "out only a handul of the major population centers and the head of the "+
                "military was destroyed. The AI (named Anubis by their creators) disappears, "+
                "leaving completely reformatted computers behind.<br><br>"+
                "The crippled population of Augoma slowly start rebuilding life.<br><br>"+
                "The first year of history within the Church (1CD, where CD means CyberDomini).",
    },
    {
        calendar:"RD", year:6869, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"foundation",
        content:"Remaining Hackfield Dev Team divisions take control, and eventually merge into the supernation of Future Empire.",
    },
    {
        calendar:"RD", year:6870, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"foundation",
        content:"Hackers who could decrypt portions of the Anubis codes reveal its acts, and found the Church of the Cybergod.",
    },
    {
        calendar:"RD", year:6871, month:0, day:0,
        race:"Sun Serpent", faction:"Sun Serpent Empire", context:"alliance",
        content:"The Sun Serpent Empire allies with Anubis.",
    },
    {
        calendar:"RD", year:6873, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"alliance",
        content:"After a bloody civil war, the planet is unified under the FE-COTC Unity Pact.",
    },

    {
        calendar:"RD", year:6883, month:0, day:0,
        race:"human", faction:"Justice Empire", context:"main",
        content:"Justice Party reemerges within Esmos country of Augoma. Anti-Anubis voices increasing.",
    },








    {
        calendar:"RD", year:6914, month:5, day:15,
        race:"human", faction:"Justice Empire", context:"foundation",
        content:"The four countries following the Way of Justice on Augoma sign an union treaty, forming "+
		"a superblock of countries. Justice Empire is officially formed. (2032IC)",
    },
    {
        calendar:"RD", year:6917, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Ladykiller (Micah Grant) dies; he resurrects on Xyronex.",
    },
    {
        calendar:"RD", year:6962, month:0, day:0,
        race:"AI", faction:"Anubis", context:"main",
        content:"Augopia of Augoma is found, robbed and conquered by Anubis. Extreme technological advancement on its side.",
    },
    {
        calendar:"RD", year:6964, month:5, day:15,
        race:"human", faction:"Justice Empire", context:"atrocity",
        content:"On the celebration of the 50th year anniversary of the existence of the Justice Empire, the last Cybergod "+
		"Church and Red Fist prisoners within the block are executed.",
    },
    {
        calendar:"RD", year:6965, month:0, day:0,
        race:"AI", faction:"Anubis", context:"main",
        content:"Anubis (after an unsuccessfull siege) finally leaves the solar system of Augoma and starts building its so-called 'chapel'.",
    },


    {
        calendar:"RD", year:6967, month:0, day:0,
        race:"human", faction:"Möebius", context:"conflict",
        content:"Anubis contacts the Möebius and offers them its power, in exchange of serving as "+
                "a military unit directly under it. The Möebius refuses this offer, causing a minor "+
                "conflict between the two.",
    },
    {
        calendar:"RD", year:6968, month:0, day:0,
        race:"human", faction:"Möebius", context:"alliance",
        content:"The Möebius breaks arms with Anubis, and makes an agreement with it. Rather than directly "+
                "serving it, the Möebius keeps autonomus, in exchange of offering peace and alliance for "+
                "the Church of the Cybergod - indirectly contacting the Future Empire with the same offering.",
    },









    {
        calendar:"RD", year:7013, month:0, day:0,
        race:"human", faction:"Shadow Legion of Caidox", context:"foundation",
        content:"The alliance of settled mercenaries and local Future Empire scientists form "+
                "the Shadow Legion on planet Caidox.",
    },







    {
        calendar:"RD", year:7102, month:0, day:0,
        race:"human", faction:"Möebius", context:"abandonment",
        content:"The Möebius ultimately gives up planet Xyneoda to the Justice Empire "+
                "by retreating and escaping through space.",
    },

    {
        calendar:"RD", year:7103, month:0, day:0,
        race:"human", faction:"People of Anberoi", context:"colonization",
        content:"Anberoi is colonized after several thousand years of silence.",
    },


    {
        calendar:"RD", year:7414, month:5, day:15,
        race:"human", faction:"Justice Empire", context:"celebration",
        content:"500th anniversary of the existence of the Justice Empire.",
    },


    {
        calendar:"RD", year:7420, month:0, day:0,
        race:"human", faction:"People of Anberoi", context:"conflict",
        content:"Date of the Anberian Alien War & the Black Dawn: aside of a bunch "+
                "of makeshift bunkers and sanctuaries, every human presence of planet "+
                "Anberoi is destroyed by the Cloudan Confederacy. As an aftermath of "+
                "the mass-destruction weapons, the planet is rendered uninhabitable "+
                "for Cloudans and humans alike.",
    },

    {
        calendar:"RD", year:7430, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Hackerboy (David Matthew Mayes) dies; he resurrects on Bhohavo.",
    },
    {
        calendar:"RD", year:7431, month:8, day:17,
        race:"human", faction:"Church of the Cybergod", context:"conflict",
        content:"The Cybergod Church defeats the Old Kingdom and takes control over Neocairo.",
    },
    {
        calendar:"RD", year:7431, month:8, day:21,
        race:"human", faction:"Free Heaven Movement", context:"conflict",
        content:"Following the takeover of Neocairo, Free Heaven Movement declares war on the Church of the Cybergod.",
    },

    {
        calendar:"RD", year:7460, month:4, day:21,
        race:"human", faction:"Union Fort", context:"foundation",
        content:"The Declaration of the One Union Fort of Anberoi; official foundation of Union Fort.",
    },

    {
        calendar:"RD", year:7464, month:0, day:0,
        race:"human", faction:"Future Empire", context:"individuals",
        content:"Hackerboy is elected to the Hackfield Dev Team Core.",
    },




    {
        calendar:"RD", year:7528, month:0, day:0,
        race:"human", faction:"Nation of the Independent Ghost Hunter Troops", context:"main",
        content:"By Jacob becoming 18, the Minkren dynasty is officially founded.",
    },

    {
        calendar:"RD", year:7534, month:0, day:0,
        race:"human", faction:"Shadow Legion of Caidox", context:"collapse",
        content:"Caidox, capital city of the Shadow Legion falls, making an end to the empire. Nation of "+
                "the Independent Ghost Hunter Troops is founded.",
    },

    {
        calendar:"RD", year:7557, month:0, day:0,
        race:"human", faction:"Galarian Matriarchy", context:"main",
        content:"Future Empire anthropologists find and explore a cult-like slave compound in the ruins "+
                "of a Shaper military bunker. First official contact with the Matriarchy of Galaris",
    },






    {
        calendar:"RD", year:7690, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Red is born as Nathaniel Adam Minkren.",
    },





    {
        calendar:"RD", year:7702, month:0, day:0,
        race:"human", faction:"Nation of the Independent Ghost Hunter Troops", context:"individuals",
        content:"Adam Minkren, the leader of the N.I.G.H.T. disappears after a military operation.",
    },

    {
        calendar:"RD", year:7704, month:0, day:0,
        race:"human", faction:"unspecified", context:"individuals",
        content:"Hackerboy finds the Obelisk Planet and enters Beacon World. "+
                "No one hears about him for two centuries.",
    },


    {
        calendar:"RD", year:7708, month:0, day:0,
        race:"human", faction:"Nation of the Independent Ghost Hunter Troops", context:"main",
        content:"By Nathan Minkren reaching 18, by the laws of the N.I.G.H.T., he becomes the de facto "+
                "leader of the organization. A handful of rebels from the rival Palda Dynasty, "+
                "exploiting the interregnum caused by Adam Minkren's disappearance, refuses to "+
                "accept Nathan as their leader.",
    },

    {
        calendar:"RD", year:7709, month:0, day:0,
        race:"human", faction:"unspecified", context:"main",
        content:"Red dies within the galaxy; he resurrects on Mieivo. ",
    },
    {
        calendar:"RD", year:7730, month:0, day:0,
        race:"human", faction:"Union Fort", context:"conflict",
        content:"Union Fort is assaulted by the Republic and the Justice Empire; tourism, immigration and trade reduced.",
    },



    {
        calendar:"RD", year:7760, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Hammer (born as Goranten Yasui) dies; he resurrects on Galaris.",
    },

    {
        calendar:"RD", year:7777, month:0, day:0,
        race:"human", faction:"Galarian Matriarchy", context:"nontemps",
        content:"Hammer takes the name Christian after officially becoming a Knight of "+
                "the Galarian Matriarchy.",
    },




    {
        calendar:"RD", year:7844, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Anput is born as Roimata Thueban Ramil.",
    },
    {
        calendar:"RD", year:7863, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Jumper is born as William George Stout.",
    },
    {
        calendar:"RD", year:7870, month:5, day:11,
        race:"human", faction:"Scarab Node", context:"main",
        content:"Anput founds the Scarab Node after becoming pregnant with Anjema.",
    },
    {
        calendar:"RD", year:7871, month:2, day:27,
        race:"human", faction:"unspecified", context:"borns",
        content:"Kebechet is born as Roimata Anjema.",
    },
    {
        calendar:"RD", year:7879, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Amazon is born on Ontenedis as Shiori Akkuar Zaian.",
    },
    {
        calendar:"RD", year:7881, month:6, day:30,
        race:"human", faction:"Republic", context:"individuals",
        content:"After graduation from the Cainabta Vida Military Academy, "+
                "Jumper initially joins to the Republic Forces. He is a sergeant "+
                "on a branch of the Khali front.",
    },    
    {
        calendar:"RD", year:7884, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Jelly is born as Iria Eehma.",
    },
    {
        calendar:"RD", year:7886, month:3, day:0,
        race:"human", faction:"Scarab Node", context:"main",
        content:"Kebechet takes control over the Scarab Node, after the death of her mother.",
    },
    {
        calendar:"RD", year:7898, month:0, day:0,
        race:"human", faction:"Jade Legion", context:"main",
        content:"Jade Legion's conflict against the Green Squad intensifies.",
    },
    {
        calendar:"RD", year:7899, month:0, day:0,
        race:"human", faction:"People of Ontenedis", context:"main",
        content:"Split of the Insect Tamer Tribe on Ontenedis.",
    },




/* Terminus Nation Invasion */

    {
        calendar:"RD", year:7901, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Drifter (Drake Ian Daviau) dies, he resurrects on Vel.",
    },

    {
        calendar:"RD", year:7904, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Hackerboy leaves Beacon World - only to arrive into the middle of "+
                "the Obelisk Incident. [WIP and spoiler anyways]",
    },

];
