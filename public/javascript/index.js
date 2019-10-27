$(function () {
    // 渲染列表数据
    function initList(){
        $.ajax({
            type: 'get',
            url: '/books',
            dataType: 'json',
            success: function (data) {
                //渲染数据列表
                let html = template('indexTpl', {list: data.result});
                $('#dataList').html(html);
                // 必须在渲染完成之后，才能操作其中的dom节点
                $('#dataList').find('tr').each(function (index, element) {
                    let td = $(element).find('td:eq(5)');
                    let id = $(element).find('td:eq(0)').text();
                    // 绑定编辑图书的单击事件
                    td.find('a:eq(0)') .click(function () {
                        editBook(id);
                    });
                    // 绑定删除图书的单击事件
                    td.find('a:eq(1)') .click(function () {
                        deleteBook(id)
                    });
                    //绑定添加书籍的事件
                    addBook();
                    //表单操作完成 清空表单
                    let form = $('#addBookForm');
                    form.get(0).reset();
                    form.find('input[type=hidden]').val('');

                })
            }
        });
    };
    initList();
    // 删除图书
    function deleteBook(id){
        // 根据id查询最新数据
        $.ajax({
            type: 'delete',
            url: '/books/book?id=' + id,
            dataType: 'json',
            success: function (data) {
                if (data.flag == '1'){
                    initList();
                }
            }
        })
    }

    // 编辑图书
    function editBook(id){
        let form = $('#addBookForm');
        // 根据id查询最新数据
        $.ajax({
            type: 'get',
            url: '/books/book?id=' + id,
            dataType: 'json',
            success: function (data) {
                // 初始化弹窗
                var mark = new MarkBox(600, 400, '编辑图书', form.get(0));
                mark.init();
                //填充表单数据
                form.find('input[name=id]').val(data.result.id);
                form.find('input[name=name]').val(data.result.name);
                form.find('input[name=author]').val(data.result.author);
                form.find('input[name=category]').val(data.result.category);
                form.find('input[name=description]').val(data.result.description);
                // 对表单提交按钮进行绑定
                // 首先解绑
                form.find('input[type=button]').unbind('click').click(function () {
                    $.ajax({
                        type: 'put',
                        url: '/books/book',
                        data: form.serialize(),
                        dataType: 'json',
                        success: function (data) {
                            if (data.flag == '1') {
                                // 隐藏弹框
                                mark.close();
                                // 重新渲染数据列表
                                initList();
                            }
                        }
                    })
                });
            }
        })
    }
    //添加图书
    function addBook() {
        $('#addBookId').click(function () {
            let form = $('#addBookForm');
            let mark = new MarkBox(600, 400, '添加图书', form.get(0));
            mark.init();
            form.find('input[type=button]').unbind('click').click(function () {
                $.ajax({
                    type: 'post',
                    url: '/books/book',
                    data: serializeNotNull(form.serialize()),
                    dataType: 'json',
                    success: function (data) {
                        if (data.flag == '1') {
                            //关闭弹窗
                            mark.close();
                            // 添加成功后，重新渲染列表
                            initList();
                        }
                    }
                })
            });
        });
    }
    // 取消空值提交，防止mysql报错
    function serializeNotNull(serStr){
        // return serStr.split("&").filter(function(str){return !str.endsWith("=")}).join("&");
        return serStr.split("&").filter(str => !str.endsWith("=")).join("&");
    }
});

