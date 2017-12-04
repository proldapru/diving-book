var OS = new Array('ubuntu','gentoo');
changeFavOS(document.getElementById('favOSSelect').value);
function changeFavOS(os)
{
    var tags = document.all ? document.all : document.getElementsByTagName('*');
	for(var t in tags)
	{
	    if(tags[t].className == os)
	    {
	        var osTags = tags[t].parentNode.children;
	        for(var osT in osTags)
	        {
	            if(osTags[osT].tagName && osTags[osT].className)
	            {
	                for(var s in OS)
	                {
	                    if(osTags[osT].className == OS[s] && OS[s] == os) osTags[osT].style.display = '';
	                    if(osTags[osT].className == OS[s] && OS[s] != os) osTags[osT].style.display = 'none';
	                }
	            }
	        }
	    }
	}
}

