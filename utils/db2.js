const mysql = require('mysql');

module.exports = {
    config: {
        host: '129.28.152.240',
        port: 3306,
        database: 'resume',
        user: 'root',
        password: 'xingkaihang',
        useConnectionPooling: true // 使用连接池
    },
    pool: null,
    /**
     * 创建连接池
     */
    create: function () {
        // 没有pool的才创建
        if (!this.pool) {
            this.pool = mysql.createPool(this.config);
        }
    },
    /**
     * 执行sql
     * @param {Object} config 操作对象
     */
    query: function (config) {
        this.create();
        this.pool.getConnection((err, conn) => {
            if (err) {
                console.log('mysql pool getConnections err:' + err);
                throw err;
            } else {
                conn.query(config.sql, config.params, (err, result) => {
                    if (config.success) {
                        console.log('result...',result)
                        config.success(result);
                    }
                    if (config.error) {
                        config.error(err);
                    }
                    // 释放连接到连接池
                    conn.release();
                });
            }
        });
    }
};
