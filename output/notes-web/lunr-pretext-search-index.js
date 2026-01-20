var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1  This week we covered the following topics:    Mathematical Modeling   Instructor note: If you are planning this activity, you need a deck of cards that you can use to divide the class into six groups of four using one characteristic (suit) and then four groups of six using another characteristic (number) so that each group of six has a member from each group of four. You may have more than 24 students, in which case, adapt appropriately!      Google NotebookLM     Mathematical Modeling  We started reading the M3 Mathematical Modeling Materials from the Society for Industrial and Applied Mathematics. You should have a list describing the six stages of making a model.   Defining the Problem Statement (Chapter 2)  Making Assumptions (Chapter 3)  Defining Variables (Chapter 4)  Building Solutions (Chapter 5)  Analysis and Model Assessment (Chapter 6)  Putting it All Together (Chapter 7)   In groups, we read the M3 Challenge Problem and Solution, with each group focusing on a different stage of the modeling process. Then we mixed up into new groups to discuss how those processes fit together into a good overall solution to the challenge problem.    Google NotebookLM  One of the first topics we'll study is apportionment .   Apportionment   The term apportionment refers to the mathematical process of distributing a fixed number of indistinguishable assets among different entities.  Each asset is indistinguishable from any other asset, and no asset can be subdivided.     Is it apportionment?   For example, suppose Courtney buys 40 boxes of coffee (from the orange and pink doughnut shop down the hill) for the math department to bring to their classes. The department has to come up with a way to decide how many boxes each professor gets, perhaps using the number of students each professor is teaching as the main relevant piece of data to make this decision.  Each professor has to decide how to share the coffee among their classes. This need not be an apportionment problem.    To dig into the primary source literature about a famous apportionment lawsuit, you will use Google NotebookLM as described in class.   NotebookLM set-up     One of your group members should use their Hamilton email account to log in at Google NotebookLM , then click Create New . That group members should also upload the SCOTUS transcript and SCOTUS opinion. Name the notebook something recognizable, like SCOTUS Apportionment .    The creator of the notebook should share it by adding the Hamilton email addresses of the other group members, with access to the full notebook.    Each group member will come up with a question they would like NotebookLM to answer about the source material, then save the reponse to the question as a note.    Finally, each group member will share their question and answer on the course blog, plus their strategy for fact-checking the answer and an assessment of how well NotebookLM did.      This is just our first foray into using a generative AI tool to enhance our learning. We will develop more skills to interact with NotebookLM throughout the course.    Links of Interest     About Congressional Apportionment from the U.S. Census Bureau.     Computing Apportionment from the U.S. Census Bureau.    Note that the public availability of U.S. Census data is important for anyone who wants to see how different apportionment methods would work out!   "
},
{
  "id": "notes-week-01-5-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "apportionment "
},
{
  "id": "notes-week-01-5-3",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-3",
  "type": "Definition",
  "number": "1",
  "title": "Apportionment.",
  "body": " Apportionment   The term apportionment refers to the mathematical process of distributing a fixed number of indistinguishable assets among different entities.  Each asset is indistinguishable from any other asset, and no asset can be subdivided.   "
},
{
  "id": "notes-week-01-5-4",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-4",
  "type": "Example",
  "number": "2",
  "title": "Is it apportionment?",
  "body": " Is it apportionment?   For example, suppose Courtney buys 40 boxes of coffee (from the orange and pink doughnut shop down the hill) for the math department to bring to their classes. The department has to come up with a way to decide how many boxes each professor gets, perhaps using the number of students each professor is teaching as the main relevant piece of data to make this decision.  Each professor has to decide how to share the coffee among their classes. This need not be an apportionment problem.   "
},
{
  "id": "notes-week-01-5-6",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-6",
  "type": "Checkpoint",
  "number": "3",
  "title": "NotebookLM set-up.",
  "body": " NotebookLM set-up     One of your group members should use their Hamilton email account to log in at Google NotebookLM , then click Create New . That group members should also upload the SCOTUS transcript and SCOTUS opinion. Name the notebook something recognizable, like SCOTUS Apportionment .    The creator of the notebook should share it by adding the Hamilton email addresses of the other group members, with access to the full notebook.    Each group member will come up with a question they would like NotebookLM to answer about the source material, then save the reponse to the question as a note.    Finally, each group member will share their question and answer on the course blog, plus their strategy for fact-checking the answer and an assessment of how well NotebookLM did.     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2  This week we covered the following topics in the second week.  "
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
