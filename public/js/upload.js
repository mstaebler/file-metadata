var app = new Vue({
    el: '#app',
    data: {
        fileSize: ''
    },
    methods: {
        onFileUpload(f) {
            var file = f.target.files || f.dataTransfer.files;
            axios.post('/upload', {fileSize: file[0].size})
            .bind(this)
            .then(function(response) {
                this.fileSize = `file size: ${response.data.fileSize.fileSize}`;
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
});
