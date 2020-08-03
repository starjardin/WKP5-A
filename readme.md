# Document for the weekend project

1. What I sucsseded:
  - when I click the `generate recepies` button the appears, that is the first step succeded.
  - I created an array from the object (using Array.from method), I did that because I thought it would be easier for for me to grab the items.
 - I created a function that generates the details  of each part of the meals. I event event delegation (listening to the parent until it matches the buttons) to get the `More info` buttons for the details.
  - It took most of my time to creat list items form an array, for the steps and the ingredients lists, I made some funny stuff in my code at least it gives list items created looks like list items.
  - opening the modale as well as closing it by adding and removing a class from the outer modale or by pressing the `escape key` to close.

2. - I think it meets the requierements, however the link of the pictures are still equivalent to one another, I tried different links but it did not work so I left it the same for now, so it only gives an egg picture for all images. I made some changes for the title and the authors, array of the steps and ingredients, and it does still work properly.
   - I did not fulfill the project until the end, I only managed to finsh the first and the second steps. 

3. If I had more time:
  - I spend most of my time on the second step of the exercise, I almost couldn't get out of there, finally, I started to work on the form modale but I did not make any succesful work.
  - I made some very simple plans for this part:
    - I created a button in the html (finished);
    - when I click the button, I should get the form appears by: 
      - creating a function to generate the form html and append it to the dom using the inner and outer modal to insert the html in and open the outer modal once the button is clicked and close it by removing the a class form the outer modal.
      - I will create an event listener that will take an event of `submit` in the form by event delegation to grab the form,
      - add those info to the recipes object.
  - Make them appear with the previous object and get all of the informations