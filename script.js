(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu');});
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');});});
  document.getElementById('yr').textContent=new Date().getFullYear();
  var f=document.getElementById('form1'),n=document.getElementById('fnote');
  // On the preview host the firm's mail script isn't available, so don't submit there.
  if(/github\.io$|^localhost$|^$/.test(location.hostname)){
    f.addEventListener('submit',function(e){e.preventDefault();n.textContent='Preview only: this form will send to office@thatcherandwands.com once the site is live on thatcherandwands.com.';});
  }
})();
