function NightDayHandler(self)
{
    var target = document.querySelector('body');

if(document.querySelector('#night_day').value === 'Night')
    {
        target.style.backgroundColor='gray';
        target.style.color='white';
        self.value='Day';
    }
    else if(self.value === 'Day')
    {
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('body').style.color='black';
        self.value='Night';

    }
}
