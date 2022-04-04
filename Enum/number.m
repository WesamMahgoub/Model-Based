classdef number < Simulink.IntEnumType
    enumeration
        zero(0)
        one(1)
        two(2)
    end
    methods(Static)
        function retval = getDfaultValue()
            retval = number.one;
        end
    end
end