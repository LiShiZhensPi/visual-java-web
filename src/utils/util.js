export function get_descripter(code) {
  var descripters = [
    "什么都不做",

    "将null推送至栈顶",

    "将int型-1推送至栈顶",

    "将int型0推送至栈顶",

    "将int型1推送至栈顶",

    "将int型2推送至栈顶",

    "将int型3推送至栈顶",

    "将int型4推送至栈顶",

    "将int型5推送至栈顶",

    "将long型0推送至栈顶",

    "将long型1推送至栈顶",

    "将float型0推送至栈顶",

    "将float型1推送至栈顶",

    "将float型2推送至栈顶",

    "将do le型0推送至栈顶",

    "将do le型1推送至栈顶",

    "将单字节的常量值(-128~127)推送至栈顶",

    "将一个短整型常量值(-32768~32767)推送至栈顶",

    "将int, float或String型常量值从常量池中推送至栈顶",

    "将int, float或String型常量值从常量池中推送至栈顶（宽索引）",

    "将long或doule型常量值从常量池中推送至栈顶（宽索引）",

    "将指定的int型本地变量",

    "将指定的long型本地变量",

    "将指定的float型本地变量",

    "将指定的doule型本地变量",

    "将指定的引用类型本地变量",

    "将第一个int型本地变量压入栈顶",

    "将第二个int型本地变量压入栈顶",

    "将第三个int型本地变量压入栈顶",

    "将第四个int型本地变量压入栈顶",

    "将第一个long型本地变量压入栈顶",

    "将第二个long型本地变量压入栈顶",

    "将第三个long型本地变量压入栈顶",

    "将第四个long型本地变量压入栈顶",

    "将第一个float型本地变量压入栈顶",

    "将第二个float型本地变量压入栈顶",

    "将第三个float型本地变量压入栈顶",

    "将第四个float型本地变量压入栈顶",

    "将第一个do le型本地变量压入栈顶",

    "将第二个do le型本地变量压入栈顶",

    "将第三个do le型本地变量压入栈顶",

    "将第四个do le型本地变量压入栈顶",

    "将第一个引用类型本地变量压入栈顶",

    "将第二个引用类型本地变量压入栈顶",

    "将第三个引用类型本地变量压入栈顶",

    "将第四个引用类型本地变量压入栈顶",

    "将int型数组指定索引的值推送至栈顶",

    "将long型数组指定索引的值推送至栈顶",

    "将float型数组指定索引的值推送至栈顶",

    "将do le型数组指定索引的值推送至栈顶",

    "将引用型数组指定索引的值推送至栈顶",

    "将boolean或byte型数组指定索引的值推送至栈顶",

    "将char型数组指定索引的值推送至栈顶",

    "将short型数组指定索引的值推送至栈顶",

    "将栈顶int型数值存入指定本地变量",

    "将栈顶long型数值存入指定本地变量",

    "将栈顶float型数值存入指定本地变量",

    "将栈顶do le型数值存入指定本地变量",

    "将栈顶引用型数值存入指定本地变量",

    "将栈顶int型数值存入第一个本地变量",

    "将栈顶int型数值存入第二个本地变量",

    "将栈顶int型数值存入第三个本地变量",

    "将栈顶int型数值存入第四个本地变量",

    "将栈顶long型数值存入第一个本地变量",

    "将栈顶long型数值存入第二个本地变量",

    "将栈顶long型数值存入第三个本地变量",

    "将栈顶long型数值存入第四个本地变量",

    "将栈顶float型数值存入第一个本地变量",

    "将栈顶float型数值存入第二个本地变量",

    "将栈顶float型数值存入第三个本地变量",

    "将栈顶float型数值存入第四个本地变量",

    "将栈顶do le型数值存入第一个本地变量",

    "将栈顶do le型数值存入第二个本地变量",

    "将栈顶do le型数值存入第三个本地变量",

    "将栈顶do le型数值存入第四个本地变量",

    "将栈顶引用型数值存入第一个本地变量",

    "将栈顶引用型数值存入第二个本地变量",

    "将栈顶引用型数值存入第三个本地变量",

    "将栈顶引用型数值存入第四个本地变量",

    "将栈顶int型数值存入指定数组的指定索引位置",

    "将栈顶long型数值存入指定数组的指定索引位置",

    "将栈顶float型数值存入指定数组的指定索引位置",

    "将栈顶do le型数值存入指定数组的指定索引位置",

    "将栈顶引用型数值存入指定数组的指定索引位置",

    "将栈顶boolean或byte型数值存入指定数组的指定索引位置",

    "将栈顶char型数值存入指定数组的指定索引位置",

    "将栈顶short型数值存入指定数组的指定索引位置",

    "将栈顶数值弹出 (数值不能是long或do le类型的)",

    "将栈顶的一个（long或do le类型的)或两个数值弹出（其它）",

    "复制栈顶数值并将复制值压入栈顶",

    "复制栈顶数值并将两个复制值压入栈顶",

    "复制栈顶数值并将三个（或两个）复制值压入栈顶",

    "复制栈顶一个（long或do le类型的)或两个（其它）数值并将复制值压入栈顶",

    "dup_x1 指令的双倍版本",

    "dup_x2 指令的双倍版本",

    "将栈最顶端的两个数值互换(数值不能是long或do le类型的)",

    "将栈顶两int型数值相加并将结果压入栈顶",

    "将栈顶两long型数值相加并将结果压入栈顶",

    "将栈顶两float型数值相加并将结果压入栈顶",

    "将栈顶两do le型数值相加并将结果压入栈顶",

    "将栈顶两int型数值相减并将结果压入栈顶",

    "将栈顶两long型数值相减并将结果压入栈顶",

    "将栈顶两float型数值相减并将结果压入栈顶",

    "将栈顶两do le型数值相减并将结果压入栈顶",

    "将栈顶两int型数值相乘并将结果压入栈顶",

    "将栈顶两long型数值相乘并将结果压入栈顶",

    "将栈顶两float型数值相乘并将结果压入栈顶",

    "将栈顶两do le型数值相乘并将结果压入栈顶",

    "将栈顶两int型数值相除并将结果压入栈顶",

    "将栈顶两long型数值相除并将结果压入栈顶",

    "将栈顶两float型数值相除并将结果压入栈顶",

    "将栈顶两do le型数值相除并将结果压入栈顶",

    "将栈顶两int型数值作取模运算并将结果压入栈顶",

    "将栈顶两long型数值作取模运算并将结果压入栈顶",

    "将栈顶两float型数值作取模运算并将结果压入栈顶",

    "将栈顶两do le型数值作取模运算并将结果压入栈顶",

    "将栈顶int型数值取负并将结果压入栈顶",

    "将栈顶long型数值取负并将结果压入栈顶",

    "将栈顶float型数值取负并将结果压入栈顶",

    "将栈顶do le型数值取负并将结果压入栈顶",

    "将int型数值左移位指定位数并将结果压入栈顶",

    "将long型数值左移位指定位数并将结果压入栈顶",

    "将int型数值右（符号）移位指定位数并将结果压入栈顶",

    "将long型数值右（符号）移位指定位数并将结果压入栈顶",

    "将int型数值右（无符号）移位指定位数并将结果压入栈顶",

    "将long型数值右（无符号）移位指定位数并将结果压入栈顶",

    "将栈顶两int型数值作“按位与”并将结果压入栈顶",

    "将栈顶两long型数值作“按位与”并将结果压入栈顶",

    "将栈顶两int型数值作“按位或”并将结果压入栈顶",

    "将栈顶两long型数值作“按位或”并将结果压入栈顶",

    "将栈顶两int型数值作“按位异或”并将结果压入栈顶",

    "将栈顶两long型数值作“按位异或”并将结果压入栈顶",

    "将指定int型变量增加指定值（i++, i–, i+=2）",

    "将栈顶int型数值强制转换成long型数值并将结果压入栈顶",

    "将栈顶int型数值强制转换成float型数值并将结果压入栈顶",

    "将栈顶int型数值强制转换成doule型数值并将结果压入栈顶",

    "将栈顶long型数值强制转换成int型数值并将结果压入栈顶",

    "将栈顶long型数值强制转换成float型数值并将结果压入栈顶",

    "将栈顶long型数值强制转换成doule型数值并将结果压入栈顶",

    "将栈顶float型数值强制转换成int型数值并将结果压入栈顶",

    "将栈顶float型数值强制转换成long型数值并将结果压入栈顶",

    "将栈顶float型数值强制转换成doule型数值并将结果压入栈顶",

    "将栈顶do le型数值强制转换成int型数值并将结果压入栈顶",

    "将栈顶do le型数值强制转换成long型数值并将结果压入栈顶",

    "将栈顶do le型数值强制转换成float型数值并将结果压入栈顶",

    "将栈顶int型数值强制转换成byte型数值并将结果压入栈顶",

    "将栈顶int型数值强制转换成char型数值并将结果压入栈顶",

    "将栈顶int型数值强制转换成short型数值并将结果压入栈顶",

    "比较栈顶两long型数值大小，并将结果（1，0，-1）压入栈顶",

    "比较栈顶两float型数值大小，并将结果（1，0，-1）压入栈顶；当其中一个数值为NaN时，将-1压入栈顶",

    "比较栈顶两float型数值大小，并将结果（1，0，-1）压入栈顶；当其中一个数值为NaN时，将1压入栈顶",

    "比较栈顶两do le型数值大小，并将结果（1，0，-1）压入栈顶；当其中一个数值为NaN时，将-1压入栈顶",

    "比较栈顶两do le型数值大小，并将结果（1，0，-1）压入栈顶；当其中一个数值为NaN时，将1压入栈顶",

    "当栈顶int型数值等于0时跳转",

    "当栈顶int型数值不等于0时跳转",

    "当栈顶int型数值小于0时跳转",

    "当栈顶int型数值大于等于0时跳转",

    "当栈顶int型数值大于0时跳转",

    "当栈顶int型数值小于等于0时跳转",

    "比较栈顶两int型数值大小，当结果等于0时跳转",

    "比较栈顶两int型数值大小，当结果不等于0时跳转",

    "比较栈顶两int型数值大小，当结果小于0时跳转",

    "比较栈顶两int型数值大小，当结果大于等于0时跳转",

    "比较栈顶两int型数值大小，当结果大于0时跳转",

    "比较栈顶两int型数值大小，当结果小于等于0时跳转",

    "比较栈顶两引用型数值，当结果相等时跳转",

    "比较栈顶两引用型数值，当结果不相等时跳转",

    "无条件跳转",

    "跳转至指定16位offset位置，并将jsr下一条指令地址压入栈顶",

    "返回至本地变量",

    "用于switch条件跳转，case值连续（可变长度指令）",

    "用于switch条件跳转，case值不连续（可变长度指令）",

    "从当前方法返回int",

    "从当前方法返回long",

    "从当前方法返回float",

    "从当前方法返回do le",

    "从当前方法返回对象引用",

    "从当前方法返回void",

    "获取指定类的静态域，并将其值压入栈顶",

    "为指定的类的静态域赋值",

    "获取指定类的实例域，并将其值压入栈顶",

    "为指定的类的实例域赋值",

    "调用实例方法",

    "调用超类构造方法，实例初始化方法，私有方法",

    "调用静态方法",

    "调用接口方法",

    "调用动态方法",

    "创建一个对象，并将其引用值压入栈顶",

    "创建一个指定原始类型（如int, float, char…）的数组，并将其引用值压入栈顶",

    "创建一个引用型（如类，接口，数组）的数组，并将其引用值压入栈顶",

    "获得数组的长度值并压入栈顶",

    "将栈顶的异常抛出",

    "检验类型转换，检验未通过将抛出ClassCastException",

    "检验对象是否是指定的类的实例，如果是将1压入栈顶，否则将0压入栈顶",

    "获得对象的锁，用于同步方法或同步块",

    "释放对象的锁，用于同步方法或同步块",

    "<待补充>",

    "创建指定类型和指定维度的多维数组（执行该指令时，操作栈中必须包含各维度的长度值），并将其引用值压入栈顶",

    "为null时跳转",

    "不为null时跳转",

    "无条件跳转（宽索引）",

    "jsr_w  跳转至指定32位offset位置，并将jsr_w下一条指令地址压入栈顶",
  ];
  var index = parseInt(code, 16);
  return descripters[index];
}

export function get_name(code) {
  var names = [
    "nop",
    "aconst_null",

    "iconst_m1",

    "iconst_0",

    "iconst_1",

    "iconst_2",

    "iconst_3",

    "iconst_4",

    "iconst_5",

    "lconst_0",

    "lconst_1",

    "fconst_0",

    "fconst_1",

    "fconst_2",

    "dconst_0",

    "dconst_1",

    "bipush",

    "sipush",

    "ldc",

    "ldc_w",

    "ldc2_w",

    "iload",

    "lload",

    "fload",

    "dload",

    "aload",

    "iload_0",

    "iload_1",

    "iload_2",

    "iload_3",

    "lload_0",

    "lload_1",

    "lload_2",

    "lload_3",

    "fload_0",

    "fload_1",

    "fload_2",

    "fload_3",

    "dload_0",

    "dload_1",

    "dload_2",

    "dload_3",

    "aload_0",

    "aload_1",

    "aload_2",

    "aload_3",

    "iaload",

    "laload",

    "faload",

    "daload",

    "aaload",

    "baload",

    "caload",

    "saload",

    "istore",

    "lstore",

    "fstore",

    "dstore",

    "astore",

    "istore_0",

    "istore_1",

    "istore_2",

    "istore_3",

    "lstore_0",

    "lstore_1",

    "lstore_2",

    "lstore_3",

    "fstore_0",

    "fstore_1",

    "fstore_2",

    "fstore_3",

    "dstore_0",

    "dstore_1",

    "dstore_2",

    "dstore_3",

    "astore_0",

    "astore_1",

    "astore_2",

    "astore_3",

    "iastore",

    "lastore",

    "fastore",

    "dastore",

    "aastore",

    "bastore",

    "castore",

    "sastore",

    "pop",

    "pop2",

    "dup",

    "dup_x1",

    "dup_x2",

    "dup2",

    "dup2_x1",

    "dup2_x2",

    "swap",

    "iadd",

    "ladd",

    "fadd",

    "dadd",

    "is",

    "ls",

    "fs",

    "ds",

    "imul",

    "lmul",

    "fmul",

    "dmul",

    "idiv",

    "ldiv",

    "fdiv",

    "ddiv",

    "irem",

    "lrem",

    "frem",

    "drem",

    "ineg",

    "lneg",

    "fneg",

    "dneg",

    "ishl",

    "lshl",

    "ishr",

    "lshr",

    "iushr",

    "lushr",

    "iand",

    "land",

    "ior",

    "lor",

    "ixor",

    "lxor",

    "iinc",

    "i2l",

    "i2f",

    "i2d",

    "l2i",

    "l2f",

    "l2d",

    "f2i",

    "f2l",

    "f2d",

    "d2i",

    "d2l",

    "d2f",

    "i2b",

    "i2c",

    "i2s",

    "lcmp",

    "fcmpl",

    "fcmpg",

    "dcmpl",

    "dcmpg",

    "ifeq",

    "ifne",

    "iflt",

    "ifge",

    "ifgt",

    "ifle",

    "if_icmpeq",

    "if_icmpne",

    "if_icmplt",

    "if_icmpge",

    "if_icmpgt",

    "if_icmple",

    "if_acmpeq",

    "if_acmpne",

    "goto",

    "jsr",

    "ret",

    "tableswitch",

    "lookupswitch",

    "ireturn",

    "lreturn",

    "freturn",

    "dreturn",

    "areturn",

    "return",

    "getstatic",

    "putstatic",

    "getfield",

    "putfield",

    "invokevirtual",

    "invokespecial",

    "invokestatic",

    "invokeinterface",

    "invokedynamic",

    "new",

    "newarray",

    "anewarray",

    "arraylength",

    "athrow",

    "checkcast",

    "instanceof",

    "monitorenter",

    "monitorexit",

    "wide",

    "multianewarray",

    "ifnull",

    "ifnonnull",

    "goto_w",
    "jsr_w",
  ];
  var index = parseInt(code, 16);
  return names[index];
}

export function get_length(code) {
  var lengths = [
    1 /* nop */,
    1 /* aconst_null */,
    1 /* iconst_m1 */,
    1 /* iconst_0 */,
    1 /* iconst_1 */,
    1 /* iconst_2 */,
    1 /* iconst_3 */,
    1 /* iconst_4 */,
    1 /* iconst_5 */,
    1 /* lconst_0 */,
    1 /* lconst_1 */,
    1 /* fconst_0 */,
    1 /* fconst_1 */,
    1 /* fconst_2 */,
    1 /* dconst_0 */,
    1 /* dconst_1 */,
    2 /* bipush */,
    3 /* sipush */,
    2 /* ldc */,
    3 /* ldc_w */,
    3 /* ldc2_w */,
    2 /* iload */,
    2 /* lload */,
    2 /* fload */,
    2 /* dload */,
    2 /* aload */,
    1 /* iload_0 */,
    1 /* iload_1 */,
    1 /* iload_2 */,
    1 /* iload_3 */,
    1 /* lload_0 */,
    1 /* lload_1 */,
    1 /* lload_2 */,
    1 /* lload_3 */,
    1 /* fload_0 */,
    1 /* fload_1 */,
    1 /* fload_2 */,
    1 /* fload_3 */,
    1 /* dload_0 */,
    1 /* dload_1 */,
    1 /* dload_2 */,
    1 /* dload_3 */,
    1 /* aload_0 */,
    1 /* aload_1 */,
    1 /* aload_2 */,
    1 /* aload_3 */,
    1 /* iaload */,
    1 /* laload */,
    1 /* faload */,
    1 /* daload */,
    1 /* aaload */,
    1 /* baload */,
    1 /* caload */,
    1 /* saload */,
    2 /* istore */,
    2 /* lstore */,
    2 /* fstore */,
    2 /* dstore */,
    2 /* astore */,
    1 /* istore_0 */,
    1 /* istore_1 */,
    1 /* istore_2 */,
    1 /* istore_3 */,
    1 /* lstore_0 */,
    1 /* lstore_1 */,
    1 /* lstore_2 */,
    1 /* lstore_3 */,
    1 /* fstore_0 */,
    1 /* fstore_1 */,
    1 /* fstore_2 */,
    1 /* fstore_3 */,
    1 /* dstore_0 */,
    1 /* dstore_1 */,
    1 /* dstore_2 */,
    1 /* dstore_3 */,
    1 /* astore_0 */,
    1 /* astore_1 */,
    1 /* astore_2 */,
    1 /* astore_3 */,
    1 /* iastore */,
    1 /* lastore */,
    1 /* fastore */,
    1 /* dastore */,
    1 /* aastore */,
    1 /* bastore */,
    1 /* castore */,
    1 /* sastore */,
    1 /* pop */,
    1 /* pop2 */,
    1 /* dup */,
    1 /* dup_x1 */,
    1 /* dup_x2 */,
    1 /* dup2 */,
    1 /* dup2_x1 */,
    1 /* dup2_x2 */,
    1 /* swap */,
    1 /* iadd */,
    1 /* ladd */,
    1 /* fadd */,
    1 /* dadd */,
    1 /* isub */,
    1 /* lsub */,
    1 /* fsub */,
    1 /* dsub */,
    1 /* imul */,
    1 /* lmul */,
    1 /* fmul */,
    1 /* dmul */,
    1 /* idiv */,
    1 /* ldiv */,
    1 /* fdiv */,
    1 /* ddiv */,
    1 /* irem */,
    1 /* lrem */,
    1 /* frem */,
    1 /* drem */,
    1 /* ineg */,
    1 /* lneg */,
    1 /* fneg */,
    1 /* dneg */,
    1 /* ishl */,
    1 /* lshl */,
    1 /* ishr */,
    1 /* lshr */,
    1 /* iushr */,
    1 /* lushr */,
    1 /* iand */,
    1 /* land */,
    1 /* ior */,
    1 /* lor */,
    1 /* ixor */,
    1 /* lxor */,
    3 /* iinc */,
    1 /* i2l */,
    1 /* i2f */,
    1 /* i2d */,
    1 /* l2i */,
    1 /* l2f */,
    1 /* l2d */,
    1 /* f2i */,
    1 /* f2l */,
    1 /* f2d */,
    1 /* d2i */,
    1 /* d2l */,
    1 /* d2f */,
    1 /* i2b */,
    1 /* i2c */,
    1 /* i2s */,
    1 /* lcmp */,
    1 /* fcmpl */,
    1 /* fcmpg */,
    1 /* dcmpl */,
    1 /* dcmpg */,
    3 /* ifeq */,
    3 /* ifne */,
    3 /* iflt */,
    3 /* ifge */,
    3 /* ifgt */,
    3 /* ifle */,
    3 /* if_icmpeq */,
    3 /* if_icmpne */,
    3 /* if_icmplt */,
    3 /* if_icmpge */,
    3 /* if_icmpgt */,
    3 /* if_icmple */,
    3 /* if_acmpeq */,
    3 /* if_acmpne */,
    3 /* goto */,
    3 /* jsr */,
    2 /* ret */,
    99 /* tableswitch */,
    99 /* lookupswitch */,
    1 /* ireturn */,
    1 /* lreturn */,
    1 /* freturn */,
    1 /* dreturn */,
    1 /* areturn */,
    1 /* return */,
    3 /* getstatic */,
    3 /* putstatic */,
    3 /* getfield */,
    3 /* putfield */,
    3 /* invokevirtual */,
    3 /* invokespecial */,
    3 /* invokestatic */,
    5 /* invokeinterface */,
    5 /* invokedynamic */,
    3 /* new */,
    2 /* newarray */,
    3 /* anewarray */,
    1 /* arraylength */,
    1 /* athrow */,
    3 /* checkcast */,
    3 /* instanceof */,
    1 /* monitorenter */,
    1 /* monitorexit */,
    0 /* wide */,
    4 /* multianewarray */,
    3 /* ifnull */,
    3 /* ifnonnull */,
    5 /* goto_w */,
    5 /* jsr_w */,
  ];
  return lengths[parseInt(code, 16)];
}
