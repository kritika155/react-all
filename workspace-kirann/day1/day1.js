<html>
    <head></head>
    <body>
   <script>
   function person(){
    console.log(this.username);
}
var userDetails={
    username:"Ravi",
    password:"xxjdfd"
};
person.call(userDetails);
   </script>
    </body>
</html>