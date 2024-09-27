function Task(position, shift, type, taskName, description, day) {
  this.taskName = taskName,
  this.position = position,
  this.shift = shift,
  this.type = type,
  this.description = description,
  (day !== undefined ? this.day = day : null)
}

const tasks = [];

{
// CONCESSIONS --------------------------
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
  "Dismantle and Clean Coke Tower, Lid Holders, & Ice Bin 6",
  "Dismantle the soda towers, melt ice, and use sanitizer and a scrubby inside the bin. Pour a bucket of sanitizer and hot water in the bin, let it dry, and fill it back up with ice. Also, wipe down the lid holders.",
  "Friday"
));

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

tasks.push(new Task(
  "Concessions", "Opening", "Weekly",
  "Dismantle and Clean Coke Tower, Lid Holders, & Ice Bin 1",
  "Dismantle the soda towers, melt ice, and use sanitizer and a scrubby inside the bin. Pour a bucket of sanitizer and hot water in the bin, let it dry, and fill it back up with ice. Also, wipe down the lid holders.",
  "Sunday"
));

tasks.push(new Task(
  "Concessions", "Opening", "Weekly",
  "",
  "",
  "Monday"
));

tasks.push(new Task(
  "Concessions", "Opening", "Weekly",
  "",
  "",
  "Monday"
));

tasks.push(new Task(
  "Concessions", "Opening", "Weekly",
  "Dismantle and Clean Coke Tower, Lid Holders, & Ice Bin 5",
  "Dismantle the soda towers, melt ice, and use sanitizer and a scrubby inside the bin. Pour a bucket of sanitizer and hot water in the bin, let it dry, and fill it back up with ice. Also, wipe down the lid holders.",
  "Tuesday"
));

tasks.push(new Task(
  "Concessions", "Opening", "Weekly",
  "",
  "",
  "Tuesday"
));

tasks.push(new Task(
  "Concessions", "Opening", "Weekly",
  "Dismantle and Clean Coke Tower, Lid Holders, & Ice Bin 3",
  "Dismantle the soda towers, melt ice, and use sanitizer and a scrubby inside the bin. Pour a bucket of sanitizer and hot water in the bin, let it dry, and fill it back up with ice. Also, wipe down the lid holders.",
  "Wednesday"
));

tasks.push(new Task(
  "Concessions", "Opening", "Weekly",
  "",
  "",
  "Thursday"
));

tasks.push(new Task(
  "Concessions", "Opening", "Weekly",
  "",
  "",
  "Thursday"
));

// USHER --------------------------------
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

export default tasks;