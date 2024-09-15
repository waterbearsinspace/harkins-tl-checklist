function TaskList() {

  function Task(position, shift, type, taskName, description, day) {
    this.taskName = taskName,
    this.position = position,
    this.shift = shift,
    this.type = type,
    this.description = description,
    (day !== undefined ? this.day = day : null)
  }
  
  const tasks = [];


  // BOX - OPENING ------------------------
  {
    // OPENING

    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Setup Condiment Stands", 
      "Take the clean dishes off the rack and place them in the front & back condiment stands."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Tech Checks with Projection Manager",
      "See the How To Tech Check page."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Unlock ADA Door",
      "Use the allen wrench in box office to unlock the disabled guest door and ensure the button is pressed for proper use."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Setup Seating Screens",
      "Get the cart out of the Cup & Bag Room and setup the screens. Remember to open the port holes first."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Wipe Down Arcade",
      "Sanitize and dust the arcade and ensure the glass is clean and has no smudges."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Put Away Lost & Found From Janitors",
      "Fill out a Lost & Found slip for each item before putting them in the drawer."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Bring Out Stantions (If No Door)",
      "Take the stantions out of Box Office and place them going from the pillar to the barricades. Remember to bring out the sign."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Bring In Stantions (Friday)",
      "Bring in the stantions and place them neatly in Box"
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Setup Lines in Mall (Weekends)",
      "Bring out the stantions and create clear lines for the box office side."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Opening", 
      "Verify Passes Are Even",
      "Ask a manager if they can print out or show you the packet paperwork. Then just verify that the numbers match with what you have physically so far. No need to write on the envelopes."
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Huddles",
      "Take the Huddle Cards and go over it with the team. If no Huddle Cards then please make sure you go over expectations of the day with the team.",
    ));

    // WEEKLY
    
    tasks.push(new Task(
      "Box", "Opening", "Weekly", 
      "Wipe Down Poster Cases in Box",
      "Use a rag and glass cleaner to wipe them down.",
      "Friday"
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Weekly", 
      "Wipe Down Stantions",
      "Use a rag and neutral cleaner to wipe them down.",
      "Saturday"
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Weekly", 
      "Make the Party Popcorn Display",
      "Get a party popcorn bad and fill it up with popcorn and set that out as the new display for the week. Don't forget to use the label maker and place today's date on the display.",
      "Sunday"
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Weekly", 
      "Wipe Down Base Boards",
      "Use a rag and warm soapy water to wipe them down.",
      "Monday"
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Weekly", 
      "Detail Clean the Cash Tills",
      "Use a rag and neutral cleaner to wipe them down. Make sure to also wipe down the outside of the drawers and the cabinet they sit in.",
      "Tuesday"
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Weekly", 
      "Check All ALD, CC, and AD Devices Are Working",
      "Use a cart and gather all the devices and take them to a theater with a movie going and make sure they all work. You can use one set of batteries if you wish. Set aside devices that do not work and make note of it for the manager.",
      "Wednesday"
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Weekly", 
      "Update Synopsis Binder",
      "Look at the POS and verify what movies are plaaying starting this weekend and then ask your manager to print out the ones you are missing.",
      "Thursday"
    ));

    // DAILIES
    
    tasks.push(new Task(
      "Box", "Opening", "Daily", 
      "Check Headsets and Speakers",
      "Verify that all the speakers and headsets are working."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Daily", 
      "Check Ticket Stock and Ensure There is Extra",
      "Look underneath all the registers and the cabinet to ensure we have enough ticket stock for the day."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Daily", 
      "Check Office Supplies",
      "Verify there is enough supplies in Box. If not, tell a manager what is missing."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Daily", 
      "Check Battery Stock Levels",
      "Verify there is at least one box of each type of battery."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Daily", 
      "Dust Lights, Reader Boards, and Vents",
      "Dust the lights, the reader boards (inside & outside), and the vents."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Daily", 
      "Wipe Down Glass (Inside and Outside)",
      "Use paper towels and glass cleaner to clean the glass."
    ));
    
    tasks.push(new Task(
      "Box", "Opening", "Daily", 
      "Turn in Checklist",
      "Have a manager sign off on the checklist and take it upstairs."
    ));
  }

  // BOX - CLOSING ------------------------
  {
    // OPENING
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Sweep Box Office",
      "Make sure the carpet is clean and free from debris."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Wipe Down Countertops and Remove Clutter",
      "Sanitize the countertops and organize any clutter."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Wipe Down POS and Glass",
      "Ensure that the POS and Glass have no fingerprints."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Wipe Down the Arcade",
      "Sanitize and dust the arcade and ensure the glass is clean and has no smudges."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Make Sure Lost & Found Is Put Away",
      "Ensure that everything is put away with a slip."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Bring in Stantions (Weekends)",
      "Bring in the stantions from in the mall and place them next to the wall by the black barriers."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Bring in Seating Screens",
      "Take down the seating screens, put them on the cart, and take it to the Cup & Bag room."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Close Port Holes",
      "Ensure the port hole covers are secured in place."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Complete Packet",
      "idk there was glare when i took the picture lol"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Lock ADA Door",
      "this one too but you know what to do"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Take Out and Reline Trash Cans",
      "Reline both trash cans and throw them away in the boat."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Closing", 
      "Huddles",
      "Take the Huddle Cards and go over them with the team. If no Huddle Cards then please make sure you go over expectations of the day with the team."
    ));

    // WEEKLY
    
    tasks.push(new Task(
      "Box", "Closing", "Weekly", 
      "Wipe Down Poster Cases in the Mall",
      "Use a rag and glass cleaner to wipe them down. They are located next to our exit doors on the mall side.",
      "Friday"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Weekly", 
      "Restock Gift Card Display",
      "Ensure the gift card is fully stocked including any appropriate seasonal cards.",
      "Saturday"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Weekly", 
      "Ensure all Lost & Found Items Have Slips",
      "Go through the drawer and make sure each item has a Lost & Found Slip filled out for them.",
      "Sunday"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Weekly", 
      "Wipe Down Door Podium",
      "Use a rag and sanitizer to wipe down.",
      "Monday"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Weekly", 
      "Dust the Spiral Staircase",
      "Dust the steps, the rails, and the barrier at the top.",
      "Tuesday"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Weekly", 
      "Clean and Organize the Cabinets",
      "Take a rag and neutral cleaner and wipe down the insides of the cabinets and the doors. Then organize the contents in a neat manner.",
      "Wednesday"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Weekly", 
      "Restock Party Popcorn Cabinet",
      "Clean, organize, and verify we have enough stock in the cabinet. If not, please stock the cabinet.",
      "Thursday"
    ));

    // DAILIES
    
    tasks.push(new Task(
      "Box", "Closing", "Daily", 
      "Remove and Throw Away Batteries from ALD, CC, and AD Devices",
      "Go through the devices to ensure that there are no batteries left. If there are, throw them out. Also throw batteries out when a guest returns a device."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Daily", 
      "Wipe Down Seating Screens, Card Readers, and Kiosks",
      "Sanitize the screens, card readers, and the kiosks. Please do not spray them down directly/"
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Daily", 
      "Wipe Down Glass (Inside and Outside)",
      "Use a rag and glass cleaner to clean the glass."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Daily", 
      "Wipe Down Pass Cubbies and Under Guest Services Counter",
      "Use a rag and neutral cleaner to tipe down all the pass cubbies and under the Guest Services counter. Please also organize under the Guest Service Counter."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Daily", 
      "Sanitize All ALD, CC, and AD Devices",
      "Sanitize as needed."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Daily", 
      "Ensure 3D Glasses Are Stocked",
      "Verify we have 3D glasses in the box."
    ));
    
    tasks.push(new Task(
      "Box", "Closing", "Daily", 
      "Turn In Checklist",
      "Have a manager sign off on the checklist and take it upstairs."
    ));
  }

  // CONCESSIONS - OPENING ----------------
  {
    // OPENING
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Turn on Ovens, Fryers, Hatcos, and Hot Dog Rollers & Warmers",
      "Verif the equipment is working and notify a manger if something does not.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Setup Poppers with Filters, Bin Cover, and Kettle Parts",
      "Ensure the popper is ready to go with all the filters in, bin cover, and crumb catcher.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Run Chemical Batches",
      "Run 2 chemical batches through the poppers.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Warm Up Nachos and Cheese",
      "Place the nachos and cheese on the hatcos, make sure the hatco is set to at least 2.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Setup Soda Towers and Run Lines",
      "Put on the nozzles, grate, and sides onto the soda towers. Run the lines by pressing the \"small\" soda button on each dispenser.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Setup Pretzel Station",
      "Ensure the drawer is setup for use, the dishes are placed, and the margarine is starting to melt. You can set the dial to 6-7 for it to melt and once it started melting bring the dial down to 3.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Place Utensils and Other Items for the Ovens, Fryers, and Poppers",
      "Ensure the grate is in the oven and the baskets and filters are in the fryer. Make sure the popcorn scoops, tongs, and other utensils are out where they are needed.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Set Out the Displays",
      "Set out 4 displays (for weekdays) and 6 displays (for weekends). All popcorn sizes and drink sizes must be displayed with the Harkins logo facing out.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Put Out Cups For Registers Being Used for the Day",
      "Check how many cashiers will be in the stand and take out the appropriate amoount of cups. Place them at the registers that have money once the registers are setup.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Complete Equipment Checks",
      "Fill out equipment checks log located in concessions stand.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Huddles",
      "Take the Huddle Cards and go over it with the team. If no Huddle Cards then please make sure you go over expectations of the day with the team.",
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Opening",
      "Plan Breaks and Register Assignments",
      "Plan your 10s and meals for your team and assign registers to ALL cashiers for the day.",
    ));
    
    // WEEKLY
    tasks.push(new Task(
      "Concessions", "Opening", "Weekly", 
      "Clean Stainless Steel Wall", 
      "Use degreaser for the stainless steel wall behind the fryer and the ovens.",
      "Saturday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Weekly", 
      "Check for Expired BIBs", 
      "Check to see if there are any expired BIBs hooked up or on the pallets. If there is notify a manager, replace the BIBs if necessary, and throw the expired BIB out.",
      "Saturday"
    ));
    
    // DAILIES
    
    tasks.push(new Task(
      "Concessions", "Opening", "Daily", 
      "Break Down Ice Machines", 
      "Use the paddle to break up the ice formations inside the ice machines."
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Daily", 
      "Wipe Down All Soda Towers Front and Back", 
      "Wipe down both the guest and concessions sides of the soda towers."
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Daily", 
      "Clean Ice Cream Freezers", 
      "Wipe down the inside of the Ice Cream Freezers. Ensure there is no build up of ice. If there is a lot the freezer needs to be defrosted."
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Daily", 
      "Clean Out the Tupperware Containers/Seed Bins", 
      "Please ensure that the tupperware containers that hold the cinammon and popcorn salt, as well as the popcorn seed bins, are cleaned out when emptied."
    ));
    
    tasks.push(new Task(
      "Concessions", "Opening", "Daily", 
      "Stock the Stand for the Next Shift", 
      "Ensure the entire stand is stocked and ready for business through the night."
    ));
  }

  // CONCESSIONS - CLOSING ----------------
  {
    // Closing
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Wipe Down All Registers, Scanners, Card Readers, and the Hot Food Monitor",
      "Ensure that the screens are smudge free and the scanners & card readers are not sticky. Don't spray screens, only the rags."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Clean Out Drains and Pour Drain Release",
      "Clear all debris from the drains first, then get Drain Release from Closet 2 or 15 and pour it down the drains. One Bottle should be able to cover all the drains."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Clean Pretzel Station",
      "Ensure that there is no grease on the drawer and double check all crevices."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Wipe Down Butter Machines and Place Drip Trays on Dirty Rack",
      "Wipe down the butter machines and take the drip trays to the dirty dish rack."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Wipe Down Icee Machines and Place Drip Trays on Dirty Rack",
      "Wipe down the icee machines and take the drip trays to the dirty dish rack."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Place All Used Dishes on Dirty Rack",
      "Double check the stand and ensure all dishes got placed on the dirty rack."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Place Fryer Filters, Baskets, and Drop Drawers on Dirty Rack",
      "Ensure the fryer is broken down and put it all on the dirty rack. The biggest of the filters stays in the fryer; it cannot get wet."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Sweep and Mop Concessions Support",
      "Sweep and mop behind concessions and double check under the soda BIB racks."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Place Nozzles in K-5 Solution",
      "Let the nozzles soak in warm water and K-5. Check the packet for water to K-5 ratio."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Stock Ice and Empty Out Ice Carts",
      "Ensure all the ice bins are full with ice and that the ice cart are completely empty."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Take Out Trash and Cardboard",
      "Take out all concessions trash and all the cardboard."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Clean Out Ovens",
      "Use degreaser or Action and a scrubbie to get the inside of the oven clean, then wipe down the outside."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Sweep Stand",
      "Ensure there is no popcorn or any other debris on the ground. Double check underneath all the poppers & back bar table and sweep up anything you see."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Put Remaining Stock Away",
      "Double check that all remaining stock is put away in the appropriate places."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Remind Team to Ring in XL Refills",
      "Ensure the team knows the standards for the day, including ringing in XL popcorn refills."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Huddles",
      "Take the Huddle Cards and go over them with the team. If no Huddle Cards then please make sure you go over expectations of the day with the team."
    ));

    // WEEKLY
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Switch Out Hot Food Trays in Reach In Freezer",
      "Move the hot food bags from one silver tray to another in the reach in freezer in the concessions stand and place the old trays on the dirt dish rack, along with any empty silver trays. Then wipe down the inside of the freezer.",
      "Friday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Clean Icee Vents, Lid Holders, and Air Filters 1",
      "Turn on the Icee machine, take off the lid holders, and the drip tray. Wipe down the whole machine. Take out the air filters and clean them before putting it all back together.",
      "Saturday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Sweep and Mop Candy Closet and Cup & Bag Room",
      "Ensure there is no empty boxes and the rooms are organized, and that there is no debris or sticky floors.",
      "Sunday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Deep Clean All Floor Drains (In & Out of Concessions)",
      "Use SOS and warm water to scrub down the drains, including the ones behind concessions by the walk-in fridge and soda BIB racks. Open up the long trough drains and sweep out the debirs, and pour hot water & drain release into them.",
      "Monday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Dismantle/Clean Coke Tower, Lid Holder, and Ice Bin 2",
      "Turn off the Icee machine, take off the lid holders, and the drip tray. Wipe down the whole machine. Take out the air filters and clean them before putting it all back together.",
      "Tuesday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Clean Icee Vents, Lid Holders, and Air Filters 2",
      "Dismantle the soda towers, melt the ice, and use sanitizer and a scrubbie inside the bin. Pour a bucket of sanitizer and hot water in the bin, let it dry, and fill it back up with ice. Wipe down the lid holders.",
      "Tuesday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Dismantle/Clean Coke Tower, Lid Holder, and Ice Bin 4",
      "Turn off the Icee machine, take off the lid holders, and the drip tray. Wipe down the whole machine. Take out the air filters and clean them before putting it all back together.Use a rag and neutral cleaner to wipe the money trays down. Make sure to also wipe down the outside of the drawers and the cabinet they sit in.",
      "Wednesday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Clean Icee Vents, Lid Holders, and Air Filters 4",
      "Dismantle the soda towers, melt the ice, and use sanitizer and a scrubbie inside the bin. Pour a bucket of sanitizer and hot water in the bin, let it dry, and fill it back up with ice. Wipe down the lid holders.",
      "Wednesday"
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Weekly", 
      "Detail Clean Money Trays",
      "Use a rag and neutral cleaner to wipe the money trays down. Make sure to also wipe down the outside of the drawers and the cabinet they sit in.",
      "Thursday"
    ));

    // DAILIES
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Wipe Down Candy Display Glass",
      "Use glass cleaner and paper towels to wipe down the candy display glass."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Ensure Ice Bins Are Full",
      "Ensure all the ice bins in the stand are full."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Wipe Down Hand Washing Sinks",
      "Ensure that aLL three of the hand washing sinks have been wiped down with no debris in or on them."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Clean out Tupperware Containers/Seed Bins",
      "Please ensure that the tupperware containers that hold the cinammon and popcorn salt, as well as the popcorn seed bins, are cleaned out when emptied."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Clean Underside of Soda Fountains",
      "Wipe down the underneath of each dispenser on the soda tower with sanitizer. Take off the nozzles first and after you are down, place the nozzle back and run the line."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Sweep Under Soda Tower/Ice Bin",
      "Open up the doors and ensure that there is no debris underneath."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Detail Clean Reach In Freezer",
      "Ensure there are no smudges on the outside and that the inside is clean with no build up of ice."
    ));
    
    tasks.push(new Task(
      "Concessions", "Closing", "Daily", 
      "Stock the Stand for the Next Day",
      "Ensure the entire stand is stocked and ready for business the next day."
    ));
  }
  
  // USHER - OPENING ----------------------
  {
    // OPENING
    
    tasks.push(new Task(
      "Usher", "Opening", "Opening", 
      "Rinse Out Boats", 
      "Wash out the boats with warm water and degreaser and dump the water out in the drain in front of the compactor."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Opening", 
      "Set up A-Frame Signs", 
      "Place one A-Frame sign on the corner across from the compactor and the other on the corner with the stop sign. Ensure that both signs are facing the right direction."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Opening", 
      "Ensure Rolling Trash Cans Have Rags and Extra Bags", 
      "Verify that each rolling trash can has supplies needed. Also ensure that each rolling trash can has been relined."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Opening", 
      "Clean 2nd Floor Glass", 
      "Wipe down the glass on the 2nd floor on the mall side with glass cleaner and paper towels."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Opening", 
      "Dry and Fold Rags", 
      "Move rags to the dryer and fold once dry. Let management know when more laundry needs to be done."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Opening", 
      "Check Placement of Bullets, Benches, and Booster Seat Racks", 
      "Verify that each item is where it belongs, centered and not in the way."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Opening", 
      "Complete Daily Seat Cleaning/Z Bar Task", 
      "Check the seat cleaning chart specific assignment."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Opening", 
      "Huddles", 
      "Use the Huddle Cards and go over it with the team. If no Huddle Cards then please make sure you go over expectation of the day with the team."
    ));
    
    // WEEKLY
    tasks.push(new Task(
      "Usher", "Opening", "Weekly", 
      "Handrails in the Auditoriums", 
      "Sanitize the handrails in each auditorium.",
      "Friday"
    ));
    
    // DAILIES
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Clean Barricades", 
      "Use glass cleaner and ensure the barricades are clean."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Perimeter Check (1 Per Shift)", 
      "Ensure the surrounding area is trash free. Make note of any graffiti and let a manager know."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Clean and Stock Condiment Stands and Restrooms", 
      "Ensure the condiment stants are clean and well stocked. Ensure thre is no trash on the floors of the restrooms and the counters & mirrors are water-mark free."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Organize Laundry Area", 
      " Ensure the rags are put away neatly and there is laundry detergent. If the dirty basket is overfilled plese start a load."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Dust Poster Cases and Standess", 
      "Use a rag to wipe them down."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Wipe Down Auditoriums' Kick Plates and Sanitize Door Handles", 
      "Use metal shine for the auditorium and usher closet kick plates."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Dust and Check Hallway Lights and Vents", 
      "Check for any burnt out lights, replace as necessary, and dust any that are visibly dusty."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Wipe Down Walls with Soda Spills", 
      "Check walls for any stains and use warm soapy water to wipe them down."
    ));
    
    tasks.push(new Task(
      "Usher", "Opening", "Daily", 
      "Turn In Checklist", 
      "Have manager sign off on checklist and take upstairs."
    ));
  }

  // USHER - CLOSING ----------------------
   {
    // CLOSING
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Clean 2nd Floor Glass", 
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Clean Break Room and Reline Trash", 
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Clean Compactor Area", 
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Reline Hallway Trash, Restrooms, and Condiment Stand Trash",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Stock All Chemical Stations & 3 Compartment Sink (If Needed)",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Stock and Organize Usher Closets (No Clutter)", 
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Wipe Down and Stock Condiment Stands",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Reline Rolling Trash Cans for the Next Day", 
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Take Trash Out", 
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Mop from Loading Dock Doors to Concession Supply Closer",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Ensure Lobby, Hallways, and Restrooms are Covered", 
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Ensure All Auditoriums and Restrooms are Empty", 
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Empty Out the Popper",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Bring in A-Frame Signs",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Clean Nozzles and Set Out to Dry",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Ensure All Exit Doors are Closed",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Closing", 
      "Huddles", 
      ""
    ));
    
    // WEEKLY
    
    tasks.push(new Task(
      "Usher", "Closing", "Weekly", 
      "Clean Auditorium Exit Doors",
      "",
      "Friday"
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Weekly", 
      "Trim Usher Brooks",
      "",
      "Saturday"
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Weekly", 
      "Clean Out Mop Buckets & Mop Sinks",
      "",
      "Saturday"
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Weekly", 
      "Wash Out Butlers",
      "",
      "Sunday"
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Weekly", 
      "Z Bars and Vent Dusting (If Days/Rows Are Not Completed)",
      "",
      "Monday"
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Weekly", 
      "Deep Clean Condiment Stands (Back)",
      "",
      "",
      "Tuesday"
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Weekly", 
      "Clean Out Employee Fridge",
      "",
      "Wednesday"
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Weekly", 
      "Z Bars and Vent Dusting (If Days/Rows Are Not Completed)",
      "",
      "Thursday"
    ));
    
    // DAILY
    
    tasks.push(new Task(
      "Usher", "Closing", "Daily", 
      "Sanitize Water Fountains",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Daily", 
      "Perimeter Check (1 per Shift)",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Daily", 
      "Clean and Stock Condiment Stands and Restrooms",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Daily", 
      "Wipe Down Eit Doors and Thresholds (Front and Back)",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Daily", 
      "Breakdown Standees",
      ""
    ));
    
    tasks.push(new Task(
      "Usher", "Closing", "Daily", 
      "Turn in Checklist",
      ""
    ));
  }

  return (
    <>
      <h1 className='section-title'>Opening</h1>
      {tasks
      .filter((task) => 
        {
          return ( 
          (task.shift == localStorage.getItem("shift")) && 
          (task.position == localStorage.getItem("position")) &&
          (task.type == "Opening")
        )
      })
      .map((task) => {
        return (
          <div className="task-container">
            <p className="task-name">{task.taskName}</p>
            <p className="task-description">{task.description}</p>
          </div>
        )
      })}

      <h1 className='section-title'>Weekly - {localStorage.getItem("day")}</h1>
      {tasks
      .filter((task) => 
      {
        return ( 
          (task.shift == localStorage.getItem("shift")) && 
          (task.position == localStorage.getItem("position")) &&
          (task.type == "Weekly") &&
          (task.day == localStorage.getItem("day"))
        )
      })
      .map((task) => {
        return (
          <div className="task-container">
            <p className="task-name">{task.taskName}</p>
            <p className="task-description">{task.description}</p>
          </div>
        )
      })}

      <h1 className='section-title'>Dailies</h1>
      {tasks
      .filter((task) => 
      {
        return ( 
          (task.shift == localStorage.getItem("shift")) && 
          (task.position == localStorage.getItem("position")) &&
          (task.type == "Daily")
        )
      })
      .map((task) => {
        return (
          <div className="task-container">
            <p className="task-name">{task.taskName}</p>
            <p className="task-description">{task.description}</p>
          </div>
        )
      })}

    </>
  )
}

export default TaskList