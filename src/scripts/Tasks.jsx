function Task(position, shift, type, taskName, description, day) {
  this.taskName = taskName,
  this.position = position,
  this.shift = shift,
  this.type = type,
  this.description = description,
  (day !== undefined ? this.day = day : null)
}

const tasks = [];

// BOX

tasks.push(new Task(
  "Box", "Opening", "Opening", 
  "Setup Condiment Stands", 
  "Take the clean dishes off the rack and place them in the condiment stands (front and back)"
));

tasks.push(new Task(
  "Box", "Opening", "Opening", 
  "Setup Condiment Stands", 
  "Take the clean dishes off the rack and place them in the condiment stands (front and back)"
));

tasks.push(new Task(
  "Box", "Opening", "Opening", 
  "Setup Condiment Stands", 
  "Take the clean dishes off the rack and place them in the condiment stands (front and back)"
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