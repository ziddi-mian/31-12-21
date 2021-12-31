// Write a JavaScript function to find whether or not the date is in daylights savings time.   
// Test Data :
// dt = new Date();
// console.log(daylights_savings(dt));
// 1

function daylights_savings(dt) 
{ 
  var dst = null;
  for (var i = 0; i < 12; ++i) 
    {
      var d = new Date(dt.getFullYear(), i, 1);
      var offset = dt.getTimezoneOffset();

      if (dst === null) 
        dst = offset;
      else if (offset < dst) 
         {
           dst = offset; 
           break;
         } 
      else if (offset > dst) 
        break;
         }
return (dt.getTimezoneOffset() == dst) | 0;
}

dt = new Date(); 
console.log(daylights_savings(dt)); 

dt = new Date(1989, 10, 1); 
console.log(daylights_savings(dt));


// Write a JavaScript function to get difference to Greenwich time (GMT) in hours.   
// Test Data :
// dt = new Date();
// console.log(diff_to_GMT(dt));
// "+05.500"

function diff_to_GMT(dt) 
{ 
   return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}

dt = new Date(); 
console.log(diff_to_GMT(dt)); 

dt = new Date(1989, 10, 1); 
console.log(diff_to_GMT(dt));


// Write a JavaScript function to get timezone offset in seconds.   
// Note : The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.
// Test Data :
// dt = new Date();
// console.log(timezone_offset_in_seconds(dt));
// 19800

function timezone_offset_in_seconds(dt) 
{ 
   return -dt.getTimezoneOffset() * 60;
}

dt = new Date(); 
console.log(timezone_offset_in_seconds(dt)); 

dt = new Date(1989, 10, 1); 
console.log(timezone_offset_in_seconds(dt))


// Write a JavaScript function to add specified years to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_years(dt, 10).toString());
// Output :
// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"


function add_years(dt,n) 
 {
 return new Date(dt.setFullYear(dt.getFullYear() + n));      
 }

dt = new Date();
console.log(add_years(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(add_years(dt, 10).toString());


// Write a JavaScript function to add specified months to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_months(dt, 10).toString());
// Output :
// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"

function add_months(dt, n) 
 {

   return new Date(dt.setMonth(dt.getMonth() + n));      
 }

dt = new Date();
console.log(add_months(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());

// Write a JavaScript function to add specified weeks to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_weeks(dt, 10).toString());
// Output :
// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"

function add_weeks(dt, n) 
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));      
 }

dt = new Date();
console.log(add_weeks(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());