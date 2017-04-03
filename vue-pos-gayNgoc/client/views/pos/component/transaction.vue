<template>
<article class="tile is-child box">
    <h1 class="title">Thanh toán</h1>
    <article class="media">
        <figure class="media-left">
        <p class="image is-64x64">
            <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
        </figure>
        <div class="media-content">
        <div class="content">
            <p>
            <strong>Cà phê đá x2</strong>
            <br>
                16.000 x 2 = <strong> 32.000</strong>
            <br>
            <small><a>Xóa</a> · <a>Sửa</a> </small>
            </p>
        </div>

        </div>
    </article>

    <article class="media">
        <figure class="media-left">
        Ghi chú <br>  
        (nếu có)
        </figure>
        <div class="media-content">
        <p class="control">
            <textarea class="textarea" placeholder="Ghi chú đơn hàng" rows="2" style="min-height: 70px"></textarea>
        </p>
        <p class="control">
            <a class="button is-large is-success" @click="openModalCard()">
            <span class="icon is-small">
                <i class="fa fa-check"></i>
            </span>
            <span>Hoàn tất</span>
            </a>


            <br/>
            <br/>
            <br/>
            <br/>

            <a class="button is-small is-outlined">Hủy đơn hàng</a>
        </p>
        </div>
    </article>



</article>

</template>