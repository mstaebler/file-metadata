var app = new Vue({
    el: '#app',
    data: {
        fileSize: ''
    },
    methods: {
        onFileUpload(f) {
            console.log('method was called');
            var file = f.target.files || f.dataTransfer.files;
            console.log('file is: ',file);
            axios.post('/upload', file).bind(this)
            .then(function(response) {
                console.log(response.data.fileSize);
                this.fileSize = `file size: ${response.data.fileSize}`;
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
});
