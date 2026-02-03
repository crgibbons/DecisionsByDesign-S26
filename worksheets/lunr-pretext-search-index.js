var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Dr. Courtney Gibbons Mathematics and Statistics Hamilton College  Last Updated:       "
},
{
  "id": "wkst-apportionment",
  "level": "1",
  "url": "wkst-apportionment.html",
  "type": "Worksheet",
  "number": "",
  "title": "Apportionment as Geometry: Hamilton and Webster on the Simplex",
  "body": " Apportionment as Geometry: Hamilton and Webster on the Simplex   In this activity you will treat apportionment methods as functions from a continuous quota space to discrete integer allocations. You will visualize Hamilton’s method and Webster’s method as geometric partitions of a simplex.  Throughout this worksheet we work on the simplex .    Warm-Up: Two Groups, Five Seats  Before working in triangles and three dimensions, we begin with the simplest possible case: two groups sharing a fixed number of seats.  Suppose two groups, A and B, are dividing 5 seats. If group A receives seats, then group B receives . So every possible allocation corresponds to a point on the line segment   In this activity, you will compare Hamilton’s method and Webster’s method in this one-dimensional setting.     Quota Space on a Line  Think of as the (possibly fractional) quota for group A. The quota for group B is automatically .    Mark the integer points on the number line from 0 to 5.  What do these integer points represent in terms of seat allocations?    The integer points are . The point represents the allocation A gets seats and B gets seats, i.e. .      What does an integer like (or the ordered pair ) represent in this setting?    It represents a quota (ideal fractional allocation) where A deserves about seats and B about seats. An apportionment method will turn this into an integer allocation near or . Which one depends on the method.       Hamilton’s Method on the Line  Hamilton’s method works by first taking lower quotas and then assigning leftover seats based on the size of the fractional parts.  In the two-group case, this process simplifies dramatically!    Suppose group A has quota .  (a) Write the lower quota for group A.  (b) Write the lower quota for group B.  (c) How many seats remain to be assigned after taking floors?    (a) A’s lower quota is . (b) B’s lower quota is .  (c) The remaining seats are . For non-integer , we have , so there is 1 leftover seat. (If is an integer, there are no leftover seats.)      Show that Hamilton’s method gives the extra seat to group A exactly when   Simplify this inequality.    Write the remainders: and .  For non-integer , and , so .  Then becomes So, within each unit interval , the switch point is .      Find the value of where the seat allocation switches.  Draw this point on the number line and label the intervals where Hamilton assigns:   2 seats to A,  3 seats to A.     The switch between A getting 2 vs 3 seats occurs on the interval , at .  For , Hamilton gives A 2 seats (and B 3). For , Hamilton gives A 3 seats (and B 2). (At exactly there is a tie in remainders.)       Webster’s Method on the Line  Webster’s method uses a scaling factor (the divisor) and then rounds to the nearest integer.  In the two-group case, Webster’s behavior becomes especially simple.    Suppose Webster uses the quota directly. Write the condition under which group A is rounded to 3 seats.  Express your answer as an inequality involving .      Find the value of where Webster switches from giving A 2 seats to giving A 3 seats.  Mark this point on the same number line you used for Hamilton.      Huntington–Hill (Equal Proportions) on the Line  Now we add one more method, often called Huntington–Hill or Equal Proportions . In this warm-up we will describe it as a next-seat rule.  We will use the common convention that each group must receive at least 1 seat. So with 5 total seats and two groups, the possible final allocations are .    Step 1: A next-seat score  Suppose a group has population and currently has seats. Its score for receiving the next seat is   The next seat goes to the group with the larger score. (If there is a tie, use a tie-breaking rule.)    Starting from , there are 3 more seats to give out. Make a small table of the scores that would be compared at each step:   When comparing A goes from 1 to 2 versus B goes from 1 to 2.  When comparing A goes from 2 to 3 versus B goes from 1 to 2.  When comparing A goes from 3 to 4 versus B goes from 1 to 2.     The score for going from to is .  Comparing A: versus B: compares to , so the first extra seat goes to whichever population is larger.  Later comparisons involve different denominators: A: uses , while B: uses , etc.      Step 2: Where does the outcome switch?  As before, let be A’s quota on the line, so B’s quota is . The Huntington–Hill method partitions the line into intervals where A receives 1, 2, 3, or 4 seats.    The middle switch between A getting 2 seats versus 3 seats happens at . (This is the symmetric point where A and B have equal population.)  The other two switch points occur when the population ratio reaches (or its reciprocal). Use the score comparison to show that the boundary between outcomes and occurs when   Then solve for the corresponding quota value .    The boundary between final outcomes and is the point where, after A already has 1 seat, A is tied with B for receiving the next relevant seat. One clean way to capture the decisive tie is: compare A’s score for with B’s score for (which uses ). Setting them equal gives , i.e. . (Equivalently, a symmetric formulation yields the same quota cut point.)  A more standard (and symmetric) way to express the decisive cut points for 5 seats is: A receives 1 seat when , and A receives 4 seats when . Converting to quota on the line: .  If , then , so   By symmetry, the boundary between 3 and 4 seats occurs at       Use the switch points to label the intervals on the line where A receives 1, 2, 3, or 4 seats under Huntington–Hill.    Let and .   : A gets 1 seat (allocation ).  : A gets 2 seats (allocation ).  : A gets 3 seats (allocation ).  : A gets 4 seats (allocation ).       Dean’s Method on the Line  Dean’s method is another divisor method, similar in structure to Webster’s and Huntington–Hill’s. The difference lies in how rounding is decided.  Instead of rounding to the nearest integer or using geometric means, Dean’s method uses the harmonic mean as the cutoff between adjacent integers.    Step 1: Dean’s Rounding Rule  Suppose a quota value lies between two integers and . Dean’s method rounds:   down to if is less than the harmonic mean of and ,  up to if is greater than that harmonic mean.   Recall that the harmonic mean of and is     Compute the harmonic mean cutoff between:   1 and 2  2 and 3     Between 1 and 2:   Between 2 and 3:       Step 2: Dean’s Switching Points on the Line  As before, let represent A’s quota on the line with total 5 seats. Dean’s rounding thresholds determine when A switches from receiving 2 seats to 3 seats, and from 1 to 2, etc.    Using the harmonic mean cutoff between 2 and 3, determine the value of where Dean switches from assigning A 2 seats to assigning A 3 seats.    The cutoff between 2 and 3 is . So Dean rounds to 3 seats when , and to 2 seats when .      Use the harmonic mean cutoffs to find the approximate switch points where A moves:   from 1 seat to 2 seats,  from 3 seats to 4 seats.     Between 1 and 2 seats, the cutoff is . So A switches from 1 to 2 seats at .  By symmetry, the cutoff between 3 and 4 seats occurs at .      Label the intervals on the number line where Dean assigns A:   1 seat  2 seats  3 seats  4 seats     Approximately:   : A gets 1 seat  : A gets 2 seats  : A gets 3 seats  : A gets 4 seats       Comparing All Four Methods    Compare the switching points for Hamilton, Webster, Huntington–Hill, and Dean for the transition between 2 seats and 3 seats.  Arrange the methods from earliest switch to latest switch as increases.    Switching points for A going from 2 to 3 seats:   Dean:  Hamilton:  Webster:  Huntington–Hill:   So Dean switches earliest, while the other three coincide at the midpoint for this case.      In words: what does Dean’s method favor compared to Webster and Huntington–Hill?    Dean’s method favors giving additional seats slightly earlier (at smaller quota values). Geometrically, its rounding boundaries are shifted toward the lower integer compared to arithmetic and geometric mean rounding.      Barycentric Coordinates and the Simplex  The plane slice in the positive orthant is represented by an equilateral triangle. Each point in the triangle corresponds to a triple with nonnegative coordinates summing to 4. The vertices correspond to , , and .   Barycentric grid for .        Mark each point on the barycentric triangle and explain how you located it:   , , .      How many integer triples satisfy ?  How many of these lie on the boundary of the simplex? How many are strictly interior?      Hamilton’s Method as a Geometric Function  Hamilton’s method assigns seats by first taking lower quotas and then distributing the remaining seats according to the sizes of the fractional parts (remainders). In this section, you will build Hamilton regions step by step.  Throughout, we work on the simplex .    Hamilton’s Method    Compute the lower quota vector .  Let be the number of surplus seats.  Let be the remainders. Let be the set of indices corresponding to the largest remainders.  Define .       Step 1: Floor Slabs  The first step of Hamilton’s method depends only on the floor function. This divides the simplex into rectangular slabs where the lower quota vector is constant.    Suppose satisfies   (a) Compute the lower quota vector .  (b) Compute the number of surplus seats .      Describe the shape of this region inside the simplex. Is it a triangle, a quadrilateral, or something else?       Step 2: Remainder Comparisons  Inside a fixed slab, Hamilton’s method compares remainders   These comparisons determine which coordinates receive the surplus seats.    In the slab from the previous exercise, write formulas for:   in terms of ,  in terms of ,  in terms of .       Suppose Hamilton assigns surplus seats to coordinates 1 and 2. Write the inequalities that express this condition in terms of remainders.  Then rewrite these inequalities using and the relation .       Step 3: One Hamilton Piece  We now combine the slab conditions and remainder inequalities to form a single Hamilton piece.    Let and consider the surplus set .   Compute the corresponding lower quota vector .  Write the slab inequalities for this choice of .  Write the remainder comparison inequalities.       On the barycentric grid:   Draw the slab region.  Draw the remainder-equality boundaries.  Shade the region corresponding to this -piece.        Step 4: Building the Full Hamilton Region  A single allocation may arise from several different surplus sets . The full Hamilton preimage is the union of all corresponding pieces.    For , list all possible surplus sets .      Sketch all pieces corresponding to these surplus sets on the same barycentric triangle.  What do you notice about how the pieces fit together?       Step 5: Interpreting Hamilton’s Geometry    Explain why Hamilton regions are intersections of:   floor slabs, and  halfspaces coming from remainder comparisons.       Describe what happens to the Hamilton output when a point crosses a remainder boundary. What changes? What stays the same?       Webster’s Method and Divisor Geometry  Webster’s method is a divisor method. Unlike Hamilton’s method, which works directly with the quota vector , Webster introduces a global scaling factor called the divisor .  We begin with a population vector and a seat total . For a chosen divisor , we define scaled quotas   Webster then rounds each to the nearest integer.   Webster Rounding Rule    (When is exactly halfway between two integers, a tie-breaking convention is required. In this activity we will avoid ties.)      Step 1: Rounding Bands for One Coordinate  First, focus on just one coordinate. Suppose Webster outputs .    Write the inequality that characterizes when .  Express your answer as a double inequality of the form       Interpret this inequality geometrically. What kind of region does it describe on the number line?      Step 2: Divisor Intervals for a Fixed Allocation  Now suppose Webster outputs the allocation .    For each coordinate, write the rounding condition in terms of .  For example, for the first coordinate:   Solve this inequality for .  Repeat this process for the second and third coordinates.      You should now have three intervals for , one from each coordinate.  Explain why Webster can output if and only if these three intervals overlap.      What does it mean geometrically if the three divisor intervals do not overlap?      Step 3: From Divisor Intervals to Geometry on the Simplex  Instead of working directly with populations , we can think in terms of scaled quotas .  For Webster to output , we must have     For , write the three slab inequalities explicitly:   One for ,  one for ,  one for .       Add the simplex constraint .  Explain why Webster’s region for is the intersection of:   three rounding slabs, and  the simplex plane.       On the barycentric grid:   Draw the three rounding boundary lines , , .  Shade the region where all three Webster rounding inequalities are satisfied.       Comparison With Hamilton    Compare the geometry of Hamilton’s regions with Webster’s regions.   Which method uses remainder comparisons?  Which method uses fixed rounding thresholds?  Which introduces a global scaling parameter?       Which method do you expect to be more stable under small changes in population data? Explain your reasoning geometrically.       In this activity you explored two apportionment methods as geometric functions. Hamilton’s method partitions the simplex using remainder comparisons, while Webster’s method partitions quota space using rounding thresholds controlled by a global scale.   "
},
{
  "id": "integer-points",
  "level": "2",
  "url": "wkst-apportionment.html#integer-points",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Mark the integer points on the number line from 0 to 5.  What do these integer points represent in terms of seat allocations?    The integer points are . The point represents the allocation A gets seats and B gets seats, i.e. .   "
},
{
  "id": "fractional-meaning",
  "level": "2",
  "url": "wkst-apportionment.html#fractional-meaning",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  What does an integer like (or the ordered pair ) represent in this setting?    It represents a quota (ideal fractional allocation) where A deserves about seats and B about seats. An apportionment method will turn this into an integer allocation near or . Which one depends on the method.   "
},
{
  "id": "hamilton-floor",
  "level": "2",
  "url": "wkst-apportionment.html#hamilton-floor",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Suppose group A has quota .  (a) Write the lower quota for group A.  (b) Write the lower quota for group B.  (c) How many seats remain to be assigned after taking floors?    (a) A’s lower quota is . (b) B’s lower quota is .  (c) The remaining seats are . For non-integer , we have , so there is 1 leftover seat. (If is an integer, there are no leftover seats.)   "
},
{
  "id": "largest-remainder-line",
  "level": "2",
  "url": "wkst-apportionment.html#largest-remainder-line",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Show that Hamilton’s method gives the extra seat to group A exactly when   Simplify this inequality.    Write the remainders: and .  For non-integer , and , so .  Then becomes So, within each unit interval , the switch point is .   "
},
{
  "id": "hamilton-threshold",
  "level": "2",
  "url": "wkst-apportionment.html#hamilton-threshold",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Find the value of where the seat allocation switches.  Draw this point on the number line and label the intervals where Hamilton assigns:   2 seats to A,  3 seats to A.     The switch between A getting 2 vs 3 seats occurs on the interval , at .  For , Hamilton gives A 2 seats (and B 3). For , Hamilton gives A 3 seats (and B 2). (At exactly there is a tie in remainders.)   "
},
{
  "id": "rounding-rule-line",
  "level": "2",
  "url": "wkst-apportionment.html#rounding-rule-line",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Suppose Webster uses the quota directly. Write the condition under which group A is rounded to 3 seats.  Express your answer as an inequality involving .   "
},
{
  "id": "webster-threshold",
  "level": "2",
  "url": "wkst-apportionment.html#webster-threshold",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Find the value of where Webster switches from giving A 2 seats to giving A 3 seats.  Mark this point on the same number line you used for Hamilton.   "
},
{
  "id": "hill-scores-table",
  "level": "2",
  "url": "wkst-apportionment.html#hill-scores-table",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  Starting from , there are 3 more seats to give out. Make a small table of the scores that would be compared at each step:   When comparing A goes from 1 to 2 versus B goes from 1 to 2.  When comparing A goes from 2 to 3 versus B goes from 1 to 2.  When comparing A goes from 3 to 4 versus B goes from 1 to 2.     The score for going from to is .  Comparing A: versus B: compares to , so the first extra seat goes to whichever population is larger.  Later comparisons involve different denominators: A: uses , while B: uses , etc.   "
},
{
  "id": "hill-thresholds-derivation",
  "level": "2",
  "url": "wkst-apportionment.html#hill-thresholds-derivation",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  The middle switch between A getting 2 seats versus 3 seats happens at . (This is the symmetric point where A and B have equal population.)  The other two switch points occur when the population ratio reaches (or its reciprocal). Use the score comparison to show that the boundary between outcomes and occurs when   Then solve for the corresponding quota value .    The boundary between final outcomes and is the point where, after A already has 1 seat, A is tied with B for receiving the next relevant seat. One clean way to capture the decisive tie is: compare A’s score for with B’s score for (which uses ). Setting them equal gives , i.e. . (Equivalently, a symmetric formulation yields the same quota cut point.)  A more standard (and symmetric) way to express the decisive cut points for 5 seats is: A receives 1 seat when , and A receives 4 seats when . Converting to quota on the line: .  If , then , so   By symmetry, the boundary between 3 and 4 seats occurs at    "
},
{
  "id": "hill-intervals",
  "level": "2",
  "url": "wkst-apportionment.html#hill-intervals",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "  Use the switch points to label the intervals on the line where A receives 1, 2, 3, or 4 seats under Huntington–Hill.    Let and .   : A gets 1 seat (allocation ).  : A gets 2 seats (allocation ).  : A gets 3 seats (allocation ).  : A gets 4 seats (allocation ).    "
},
{
  "id": "dean-cutoff-example",
  "level": "2",
  "url": "wkst-apportionment.html#dean-cutoff-example",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": "  Compute the harmonic mean cutoff between:   1 and 2  2 and 3     Between 1 and 2:   Between 2 and 3:    "
},
{
  "id": "dean-middle-switch",
  "level": "2",
  "url": "wkst-apportionment.html#dean-middle-switch",
  "type": "Worksheet Exercise",
  "number": "12",
  "title": "",
  "body": "  Using the harmonic mean cutoff between 2 and 3, determine the value of where Dean switches from assigning A 2 seats to assigning A 3 seats.    The cutoff between 2 and 3 is . So Dean rounds to 3 seats when , and to 2 seats when .   "
},
{
  "id": "dean-other-switches",
  "level": "2",
  "url": "wkst-apportionment.html#dean-other-switches",
  "type": "Worksheet Exercise",
  "number": "13",
  "title": "",
  "body": "  Use the harmonic mean cutoffs to find the approximate switch points where A moves:   from 1 seat to 2 seats,  from 3 seats to 4 seats.     Between 1 and 2 seats, the cutoff is . So A switches from 1 to 2 seats at .  By symmetry, the cutoff between 3 and 4 seats occurs at .   "
},
{
  "id": "dean-intervals",
  "level": "2",
  "url": "wkst-apportionment.html#dean-intervals",
  "type": "Worksheet Exercise",
  "number": "14",
  "title": "",
  "body": "  Label the intervals on the number line where Dean assigns A:   1 seat  2 seats  3 seats  4 seats     Approximately:   : A gets 1 seat  : A gets 2 seats  : A gets 3 seats  : A gets 4 seats    "
},
{
  "id": "compare-all",
  "level": "2",
  "url": "wkst-apportionment.html#compare-all",
  "type": "Worksheet Exercise",
  "number": "15",
  "title": "",
  "body": "  Compare the switching points for Hamilton, Webster, Huntington–Hill, and Dean for the transition between 2 seats and 3 seats.  Arrange the methods from earliest switch to latest switch as increases.    Switching points for A going from 2 to 3 seats:   Dean:  Hamilton:  Webster:  Huntington–Hill:   So Dean switches earliest, while the other three coincide at the midpoint for this case.   "
},
{
  "id": "interpretation-dean",
  "level": "2",
  "url": "wkst-apportionment.html#interpretation-dean",
  "type": "Worksheet Exercise",
  "number": "16",
  "title": "",
  "body": "  In words: what does Dean’s method favor compared to Webster and Huntington–Hill?    Dean’s method favors giving additional seats slightly earlier (at smaller quota values). Geometrically, its rounding boundaries are shifted toward the lower integer compared to arithmetic and geometric mean rounding.   "
},
{
  "id": "barycentric-grid",
  "level": "2",
  "url": "wkst-apportionment.html#barycentric-grid",
  "type": "Figure",
  "number": "17",
  "title": "",
  "body": " Barycentric grid for .     "
},
{
  "id": "reading-coordinates",
  "level": "2",
  "url": "wkst-apportionment.html#reading-coordinates",
  "type": "Worksheet Exercise",
  "number": "17",
  "title": "",
  "body": "  Mark each point on the barycentric triangle and explain how you located it:   , , .   "
},
{
  "id": "integer-lattice",
  "level": "2",
  "url": "wkst-apportionment.html#integer-lattice",
  "type": "Worksheet Exercise",
  "number": "18",
  "title": "",
  "body": "  How many integer triples satisfy ?  How many of these lie on the boundary of the simplex? How many are strictly interior?   "
},
{
  "id": "hamilton-definition",
  "level": "2",
  "url": "wkst-apportionment.html#hamilton-definition",
  "type": "Definition",
  "number": "20",
  "title": "Hamilton’s Method.",
  "body": " Hamilton’s Method    Compute the lower quota vector .  Let be the number of surplus seats.  Let be the remainders. Let be the set of indices corresponding to the largest remainders.  Define .    "
},
{
  "id": "floor-example",
  "level": "2",
  "url": "wkst-apportionment.html#floor-example",
  "type": "Worksheet Exercise",
  "number": "19",
  "title": "",
  "body": "  Suppose satisfies   (a) Compute the lower quota vector .  (b) Compute the number of surplus seats .   "
},
{
  "id": "slab-geometry",
  "level": "2",
  "url": "wkst-apportionment.html#slab-geometry",
  "type": "Worksheet Exercise",
  "number": "20",
  "title": "",
  "body": "  Describe the shape of this region inside the simplex. Is it a triangle, a quadrilateral, or something else?   "
},
{
  "id": "remainder-formulas",
  "level": "2",
  "url": "wkst-apportionment.html#remainder-formulas",
  "type": "Worksheet Exercise",
  "number": "21",
  "title": "",
  "body": "  In the slab from the previous exercise, write formulas for:   in terms of ,  in terms of ,  in terms of .    "
},
{
  "id": "largest-remainder-ineq",
  "level": "2",
  "url": "wkst-apportionment.html#largest-remainder-ineq",
  "type": "Worksheet Exercise",
  "number": "22",
  "title": "",
  "body": "  Suppose Hamilton assigns surplus seats to coordinates 1 and 2. Write the inequalities that express this condition in terms of remainders.  Then rewrite these inequalities using and the relation .   "
},
{
  "id": "single-piece",
  "level": "2",
  "url": "wkst-apportionment.html#single-piece",
  "type": "Worksheet Exercise",
  "number": "23",
  "title": "",
  "body": "  Let and consider the surplus set .   Compute the corresponding lower quota vector .  Write the slab inequalities for this choice of .  Write the remainder comparison inequalities.    "
},
{
  "id": "draw-piece",
  "level": "2",
  "url": "wkst-apportionment.html#draw-piece",
  "type": "Worksheet Exercise",
  "number": "24",
  "title": "",
  "body": "  On the barycentric grid:   Draw the slab region.  Draw the remainder-equality boundaries.  Shade the region corresponding to this -piece.    "
},
{
  "id": "list-S",
  "level": "2",
  "url": "wkst-apportionment.html#list-S",
  "type": "Worksheet Exercise",
  "number": "25",
  "title": "",
  "body": "  For , list all possible surplus sets .   "
},
{
  "id": "union-geometry",
  "level": "2",
  "url": "wkst-apportionment.html#union-geometry",
  "type": "Worksheet Exercise",
  "number": "26",
  "title": "",
  "body": "  Sketch all pieces corresponding to these surplus sets on the same barycentric triangle.  What do you notice about how the pieces fit together?   "
},
{
  "id": "polyhedron-interpretation",
  "level": "2",
  "url": "wkst-apportionment.html#polyhedron-interpretation",
  "type": "Worksheet Exercise",
  "number": "27",
  "title": "",
  "body": "  Explain why Hamilton regions are intersections of:   floor slabs, and  halfspaces coming from remainder comparisons.    "
},
{
  "id": "hamilton-sensitivity",
  "level": "2",
  "url": "wkst-apportionment.html#hamilton-sensitivity",
  "type": "Worksheet Exercise",
  "number": "28",
  "title": "",
  "body": "  Describe what happens to the Hamilton output when a point crosses a remainder boundary. What changes? What stays the same?   "
},
{
  "id": "webster-method-2",
  "level": "2",
  "url": "wkst-apportionment.html#webster-method-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divisor "
},
{
  "id": "webster-rounding",
  "level": "2",
  "url": "wkst-apportionment.html#webster-rounding",
  "type": "Definition",
  "number": "31",
  "title": "Webster Rounding Rule.",
  "body": " Webster Rounding Rule    (When is exactly halfway between two integers, a tie-breaking convention is required. In this activity we will avoid ties.)   "
},
{
  "id": "rounding-band",
  "level": "2",
  "url": "wkst-apportionment.html#rounding-band",
  "type": "Worksheet Exercise",
  "number": "29",
  "title": "",
  "body": "  Write the inequality that characterizes when .  Express your answer as a double inequality of the form    "
},
{
  "id": "rounding-interpretation",
  "level": "2",
  "url": "wkst-apportionment.html#rounding-interpretation",
  "type": "Worksheet Exercise",
  "number": "30",
  "title": "",
  "body": "  Interpret this inequality geometrically. What kind of region does it describe on the number line?   "
},
{
  "id": "webster-coordinate-intervals",
  "level": "2",
  "url": "wkst-apportionment.html#webster-coordinate-intervals",
  "type": "Worksheet Exercise",
  "number": "31",
  "title": "",
  "body": "  For each coordinate, write the rounding condition in terms of .  For example, for the first coordinate:   Solve this inequality for .  Repeat this process for the second and third coordinates.   "
},
{
  "id": "interval-intersection",
  "level": "2",
  "url": "wkst-apportionment.html#interval-intersection",
  "type": "Worksheet Exercise",
  "number": "32",
  "title": "",
  "body": "  You should now have three intervals for , one from each coordinate.  Explain why Webster can output if and only if these three intervals overlap.   "
},
{
  "id": "interval-geometry",
  "level": "2",
  "url": "wkst-apportionment.html#interval-geometry",
  "type": "Worksheet Exercise",
  "number": "33",
  "title": "",
  "body": "  What does it mean geometrically if the three divisor intervals do not overlap?   "
},
{
  "id": "slab-geometry-again",
  "level": "2",
  "url": "wkst-apportionment.html#slab-geometry-again",
  "type": "Worksheet Exercise",
  "number": "34",
  "title": "",
  "body": "  For , write the three slab inequalities explicitly:   One for ,  one for ,  one for .    "
},
{
  "id": "simplex-intersection",
  "level": "2",
  "url": "wkst-apportionment.html#simplex-intersection",
  "type": "Worksheet Exercise",
  "number": "35",
  "title": "",
  "body": "  Add the simplex constraint .  Explain why Webster’s region for is the intersection of:   three rounding slabs, and  the simplex plane.    "
},
{
  "id": "webster-sketch",
  "level": "2",
  "url": "wkst-apportionment.html#webster-sketch",
  "type": "Worksheet Exercise",
  "number": "36",
  "title": "",
  "body": "  On the barycentric grid:   Draw the three rounding boundary lines , , .  Shade the region where all three Webster rounding inequalities are satisfied.    "
},
{
  "id": "compare-geometry",
  "level": "2",
  "url": "wkst-apportionment.html#compare-geometry",
  "type": "Worksheet Exercise",
  "number": "37",
  "title": "",
  "body": "  Compare the geometry of Hamilton’s regions with Webster’s regions.   Which method uses remainder comparisons?  Which method uses fixed rounding thresholds?  Which introduces a global scaling parameter?    "
},
{
  "id": "stability",
  "level": "2",
  "url": "wkst-apportionment.html#stability",
  "type": "Worksheet Exercise",
  "number": "38",
  "title": "",
  "body": "  Which method do you expect to be more stable under small changes in population data? Explain your reasoning geometrically.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
