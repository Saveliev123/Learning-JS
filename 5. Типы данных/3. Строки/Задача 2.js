function checkSpam(str)
{
  str = str.toLowerCase();
  if (str.includes("xxx") || str.includes("viagra"))
  {
	  return true;
  }
  return false;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
