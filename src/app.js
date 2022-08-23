let label = document.querySelector('.input-label');
            document.querySelector('.inputField')
                .addEventListener('input', event => {
                    let input = event.target;

                    if (event.target.value) {
                        ['border-sky-600', 'border-b-2'].forEach(c => input.classList.add(c));
                        ['text-lg', '-top-5', 'text-sky-800'].forEach(c => label.classList.add(c));
                    } else {
                        ['border-sky-600', 'border-b-2'].forEach(c => input.classList.remove(c));
                        ['text-lg', '-top-5', 'text-sky-800'].forEach(c => label.classList.remove(c));
                    }
                })