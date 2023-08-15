const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        // btnLovers = menu.querySelector('.lovers') .....
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        // markLovers = wrapper.querySelectorAll('.lovers')....
        no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    function Tabs(btnSelector, markSelector) {
        menu.querySelector(btnSelector).addEventListener('click', () => {

            if (markSelector) {
                typeFilter(wrapper.querySelector(markSelector));
            } else {
                typeFilter(wrapper.querySelectorAll(btnSelector));
            }
        });
    }

    Tabs('.all');
    Tabs('.lovers');
    Tabs('.chef');
    Tabs('.girl');
    Tabs('.guy');
    Tabs('.grandmother', '.portfolio-no');
    Tabs('.granddad', '.portfolio-no');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;