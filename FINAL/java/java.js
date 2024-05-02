
    function updateClock() {
      var now = new Date(); // current date
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      var strTime = hours + ':' + minutes + ':' + seconds;
      document.getElementById("clock").innerHTML = strTime;
    }
    
    setInterval(updateClock, 1000); // Setting timer to update clock every second

  
  const h1 = document.getElementsByTagName('h2')
  gsap.from(h1, 2, {
      x:100,
      scale:1.1,
      delay: 0.6,
      ease: 'bounce.out',
    })
  const bounce = document.getElementsByClassName('bounce')
  gsap.from(bounce, 2, {
      x:-100,
      scale:1.1,
      delay: 0.6,
      ease: 'bounce.out',
    })
    const img = document.getElementsByTagName('img')
    gsap.from(img, 2, {
        x:-100,
        scale:1.1,
        delay: 0.5,
        ease: 'bounce.out',
      })
      const title = document.getElementsByTagName('h1')
        gsap.from(title, 2, {
            x:-900,
            scale:1.1,
            delay: 0.2,
            ease: 'elastic.out',
          })
      const para = document.getElementsByTagName('h3')
          gsap.from(para, 2, {
              x:-900,
              scale:1.1,
              delay: 0.2,
              ease: 'elastic.out',
            })
            const nav = document.getElementsByTagName('a')
          gsap.from(nav, 2, {
              x:-900,
              scale:1.1,
              delay: 0.2,
              ease: 'elastic.out',
            })
