window.addEventListener('scroll', () => {
              const skillsSection = document.querySelector('.skills-section');
              const rect = skillsSection.getBoundingClientRect();
              const isVisible = rect.top < window.innerHeight - 100;
          
              if (isVisible) {
                skillsSection.classList.add('show');
              }
            });