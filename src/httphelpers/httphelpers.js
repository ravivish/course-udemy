
export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   return theInput;
};

export const handleErrors = (response) => {
   if(!response.ok){
      throw new Error("Internal Error Occured");
   }
   return response.json();
};