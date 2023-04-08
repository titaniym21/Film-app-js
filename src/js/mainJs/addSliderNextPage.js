
async function addSliderNextPage(obj, key, currIndex) {
    try {
      let tmp = JSON.parse(localStorage.getItem(key));
      let pageMas = tmp?.pageMas || [1];
      if (!tmp) {
        const response = await fetch(obj[key]);
        const data = await response.json();
        // Обновляем метку времени и сохраняем данные в localStorage
        const timestamp = new Date().getTime();
        const newData = { ...data, timestamp, pageMas };
        localStorage.setItem(keyName, JSON.stringify(newData));
        return newData;
      } else {
        const response = await fetch(obj[key]);
        const data = await response.json();
        const pageObj = data.page;
       
        if (pageMas.indexOf(pageObj) === -1) {
          pageMas.push(pageObj);
          const reult1 = tmp.results;
          const reult2 = data.results;
          const result = reult1.concat(reult2);
          tmp.results = result;
          tmp.pageMas = pageMas;
          localStorage.setItem(key, JSON.stringify(tmp));
          await addFilmToMain(key, `.${key}_item`, `.left_arrow_${key}`, `.right_arrow_${key}`, currIndex);
        }
        return tmp;
      }
    } catch (err) {
      console.log(err);
    }
}

module.exports = addSliderNextPage;