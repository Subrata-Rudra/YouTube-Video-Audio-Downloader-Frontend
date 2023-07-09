function getVideo() {
  var thumbnail = document.getElementById("thumbnail");
  var title = document.getElementById("v_title");
  var link = document.getElementById("link").value;
  let url = "https://youtube-downloader-by-subrata.onrender.com/video/?link=" + link;
  div = document.getElementById("inp");
  div.parentNode.removeChild(div);
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      // console.log(objectData);
      title.innerHTML = objectData.video_title;
      thumbnail.src = objectData.video_thumbnail;
      const resList = JSON.parse(objectData.video_resolution_list);
      const linkList = JSON.parse(objectData.video_download_link_list);
      // console.log(resList);
      // console.log(linkList);
      var tableData;
      for (let i = 0; i < resList.length; i++) {
        tableData += `<tr>
        <td>${resList[i]}</td>
        <td><a href="${linkList[i]}">Download</a></td>
        </tr>`;
      }
      document.getElementById("table_body").innerHTML = tableData;
    });
  document.getElementById("main").classList.remove("invisible");
}


function getAudio() {
  var thumbnail1 = document.getElementById("thumbnail1");
  var title1 = document.getElementById("a_title");
  var link1 = document.getElementById("link1").value;
  let url = "https://youtube-downloader-by-subrata.onrender.com/audio/?link=" + link1;
  div = document.getElementById("inp1");
  div.parentNode.removeChild(div);
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((objectData) => {
      // console.log(objectData);
      title1.innerHTML = objectData.audio_title;
      thumbnail1.src = objectData.audio_thumbnail;
      const resList = JSON.parse(objectData.audio_resolution_list);
      const linkList = JSON.parse(objectData.audio_download_link_list);
      // console.log(resList);
      // console.log(linkList);
      var tableData;
      for (let i = 0; i < resList.length; i++) {
        tableData += `<tr>
        <td>${resList[i]}</td>
        <td><a href="${linkList[i]}">Download</a></td>
        </tr>`;
      }
      document.getElementById("table_body1").innerHTML = tableData;
    });
  document.getElementById("main1").classList.remove("invisible");
}
