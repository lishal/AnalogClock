setInterval(() => {
    d=new Date();
    hour=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    ms=d.getMilliseconds();
    date=d.getDate();

    hour_rotation = 30 * hour + 0.5 * min; 
	minute_rotation = 6 * min + 0.1 * sec;
    sec_rotation = 6 * sec+ 0.006 * ms;
     hour_hand.style.transform =`rotate(${hour_rotation}deg)`;
     minute_hand.style.transform =`rotate(${minute_rotation}deg)`;
     second_hand.style.transform =`rotate(${sec_rotation}deg)`;
    document.getElementById('date').innerHTML=date;
});

/*NOTE:
1. For Hour Rotation:
    Total Rotation of clock:360 degree
    Total Total number in clock is 12
    Now, 360/12=30 degree which means to roate from 12 to 1 or 1 to 2 it will rotate 30 degree
    Again there will be slight rotation if  minute hand is also rotating to calculate that,
    30/60= 0.5 now 30 is the rotation from 12 to 1 degree and 60 is in 1 hr 60 min will be there 
    Therefore, in 1 hour it should rotate 30*hour+0.5*min
2. For Minute Rotation:
    Total CLock Rotation = 360 degree
    In 1 hour= 60 min
    Now, To rotate for a minute, 360/60 = 6 degree * actual minute 
    for example , if minute is 4 then 6degree *4 
    also minute rotates when there is slight change in the seconds 
    for that 6/60=0.1 where as 6 is the actual degree it should roate and 60 is the second(1 min=60 sec)
    Finally to complete the rotation, 
    6* actual min+ 0.1 * actual second
3. For Second Rotation:
    Total Clock Rotation = 360 degree
    1 min = 60 sec
    Now, To rotate for a second, 360/60 = 6 degree * actual second
    Milliseconds are optional for this but if you want to add millisecond then,
    1 sec=1000 millisecond
    so 6/1000=0.006
    Finally to complete the rotation, 
    6* actual sec+ 0.006 * actual millisecond
*/