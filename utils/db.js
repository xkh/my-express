const mysql = require('mysql');

module.exports = {
    config: {
        host: '129.28.152.240',
        port: 3306,
        database: 'resume',
        user: 'root',
        password: 'xingkaihang',
        useConnectionPooling: true, // 使用连接池
        typeCast: true,             // 是否把结果值转换为原生的 javascript 类型
    },
    pool: null,
    /**
     * 创建连接池
     */
    create: function () {
        // 没有pool的才创建
        if (!this.pool) {
            this.pool = mysql.createPool(this.config);
            this.pool.connectionLimit = 10; // 连接池中可以存放的最大连接数量
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
                    // 释放连接到连接池
                    conn.release();
                    if (config.success) {
                        console.log('result...',result)
                        let successResult={
                            "code": 0,
                            "success": true,
                            "data": result[0]
                        };
                        return config.success(successResult);
                    }
                    if (config.error) {
                        let errorResult={
                            "code": 500,
                            "success": false,
                            "data": err
                        };
                        return config.error(errorResult);
                    }
                });
            }
        });
    }
};
